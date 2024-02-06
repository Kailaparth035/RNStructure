import {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from '../../controller/user_controller';
import {clearUserList} from '../../redux/slices/user_list_slice';
import {useNavigation} from '@react-navigation/native';

const UserListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {users, status, error} = useSelector((state: any) => state.userList);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUserList());
    }

    return () => {
      dispatch(clearUserList());
    };
  }, []);

  if (status === 'loading') {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center', fontSize: 18}}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 10}}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default UserListScreen;

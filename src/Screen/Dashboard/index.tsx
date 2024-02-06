import {FlatList, SafeAreaView, Text, View, Image} from 'react-native';
import Button from '../../Component/Button';
import Header from '../../Component/Header';
import commonStyles from '../../Theme/commonStyle.css';
import {useSelector, useDispatch} from 'react-redux';
import {UserListRequest} from '../../Redux/Action/UserAction';
import {LoaderAction} from '../../Redux/Action/LoaderAction';
import {useEffect, useState} from 'react';
import styles from './styles';
import {AsyncKey} from '../../Theme/Constant/AsyncKey';
import {getItem, multiGetItem, multiSetItem} from '../../Helper/StoreData';
import {scale} from '../../Theme/Font/Scalling';
import {COLORS} from '../../Theme/Color';
import {FONTS} from '../../Theme/Font';
const Dashboard = ({navigation}: {navigation: any}) => {
  const userListRes = useSelector((state: any) => state.userList);
  const loaderRes = useSelector((state: any) => state.loader);

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (userListRes.data !== null) {
      console.log('userListRes.data ::', userListRes.data);
      setData(userListRes.data.products);
    } else {
      dispatch(UserListRequest());
      dispatch(LoaderAction(true));
    }
  }, [userListRes.data]);

  const fetchData = async () => {
    const val = await getItem(AsyncKey.USER_LIST); // Await the getItem function
    const multiVal = await multiGetItem(AsyncKey.TEST, AsyncKey.TEST1);
    console.log('val ::', val); // Log the retrieved value
    if (multiVal !== null) {
      console.log('multiVal ::', multiVal[0][1]); // Log the retrieved value
      console.log('multiVal ::', multiVal[1][1]); // Log the retrieved value
    }

    // Now you can use the retrieved value as needed
  };
  useEffect(() => {
    fetchData();
    multiSetItem(AsyncKey.TEST, 'abc', AsyncKey.TEST1, 'xyz');
  }, []);
  const dispatch = useDispatch();

  const renderItem = ({item, index}: {item: any; index: any}) => (
    <View style={styles.rendercontainer}>
      <View style={{flex: 4}}>
        <Image source={{uri: item.thumbnail}} style={styles.renderImg} />
      </View>

      <View style={styles.renderTextContainer}>
        <Text style={styles.brandText}>{item.brand}</Text>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text style={styles.categoryText}>{item.description}</Text>
        <Text style={styles.categoryText}>{item.stock}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <Header
        onPress={() => navigation.goBack()}
        text="Dashboard"
        barOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: scale(20)}}
      />
    </SafeAreaView>
  );
};
export default Dashboard;

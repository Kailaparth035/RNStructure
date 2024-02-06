import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from 'react-native';
import loginStyle from './login_styles';
import {GlobalInclude} from '../../helper/global_include';
import {ScrollView} from 'react-native-gesture-handler';
import CustomTextInput from '../components/custom_text_input';
import GradientButton from '../components/button';
import Loading from '../components/loading';
import {useDispatch} from 'react-redux';
import {startLoading, stopLoading} from '../../redux/slices/loading_slice';

const LoginScreen = ({navigation}: any) => {
  // for loading

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // for validation
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const passwordInputRef = useRef<TextInput>(null);

  const handleLogin = async () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate(GlobalInclude.ScreenName.UserListScreen);
    // dispatch(startLoading());

    // try {
    //   await new Promise(resolve => setTimeout(resolve, 5000));
    // } finally {
    //   dispatch(stopLoading());
    // }
  };

  const validateEmail = () => {
    if (username.length == 0) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const validatePassword = () => {
    if (password.length == 0) {
      setPasswordError(true); // Set to true if there's an error, false otherwise
    } else {
      setPasswordError(false);
    }
  };

  const handleUsernameSubmit = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  const handlePasswordSubmit = () => {
    handleLogin();
  };

  const buildAppHeaderForLogin = () => (
    <View>
      <Image
        source={GlobalInclude.Assets.loginTopBg}
        style={[loginStyle.topImage]}
      />
      <View style={[loginStyle.logoContainer, {alignSelf: 'center'}]}>
        <Image
          source={GlobalInclude.Assets.splashLogo}
          style={loginStyle.logoImage}
        />
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View>
        {buildAppHeaderForLogin()}
        <View style={{height: 20}}></View>
        <View style={{paddingHorizontal: 20}}>
          <CustomTextInput
            placeholder="Enter Email"
            onChangeText={text => setUsername(text)}
            error={emailError}
            errorMessage="Invalid email format"
            onBlur={validateEmail}
          />
          <View style={{height: 20}}></View>
          <CustomTextInput
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            error={passwordError}
            errorMessage="Password is required"
            onBlur={validatePassword}
          />
          <View style={{height: 20}}></View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <GradientButton buttonText="Login" onPress={handleLogin} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

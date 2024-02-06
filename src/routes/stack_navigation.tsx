import {GlobalInclude} from '../helper/global_include';
import LoginScreen from '../view/auth/login_screen';
import SplashScreen from '../view/auth/splash_screen';
import {createStackNavigator} from '@react-navigation/stack';
import UserListScreen from '../view/dashboard/user_list_screen';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={GlobalInclude.ScreenName.Splash}
        component={SplashScreen}
      />
      <Stack.Screen
        name={GlobalInclude.ScreenName.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        name={GlobalInclude.ScreenName.UserListScreen}
        component={UserListScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

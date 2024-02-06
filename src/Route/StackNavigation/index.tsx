import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../Screen/Dashboard';
import {SCREENS} from '../../Theme/Constant/NavigationConstant';
import DrawerNavigation from '../DrawerNavigation';
import TabNavigation from '../TabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREENS.DRAWER_NAVIGATION}
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;

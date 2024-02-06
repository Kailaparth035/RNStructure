import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../Screen/Dashboard';
import {SCREENS} from '../../Theme/Constant/NavigationConstant';
import StackNavigation from '../StackNavigation';

const Main = createStackNavigator();

const MainNavigation = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen
        name={SCREENS.STACK_NAVIGATION}
        component={StackNavigation}
      />
    </Main.Navigator>
  );
};
export default MainNavigation;

import {createDrawerNavigator} from '@react-navigation/drawer';
import {SCREENS} from '../../Theme/Constant/NavigationConstant';
import TabNavigation from '../TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={SCREENS.TAB_NAVIGATION} component={TabNavigation} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;

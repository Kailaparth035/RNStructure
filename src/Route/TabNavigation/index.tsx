import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../../Screen/Dashboard';
import {SCREENS} from '../../Theme/Constant/NavigationConstant';
import {Image, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Color';
import {scale} from '../../Theme/Font/Scalling';
import {IMAGES} from '../../Theme/Images';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle:{height:scale(60)},
        tabBarStyle:{height:scale(60)}
      }}>
      <Tab.Screen
        name={SCREENS.HOME_TAB}
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Image
                  source={focused ? IMAGES.HOME_HOVER : IMAGES.HOME}
                  style={[styles.imgIcon]}
                  resizeMode="contain"
                />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
const styles = StyleSheet.create({
  imgIcon: {
    height: scale(25),
    width: scale(25),
  },
});

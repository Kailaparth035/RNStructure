import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {GlobalInclude} from '../../helper/global_include';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(GlobalInclude.ScreenName.Login);
    }, 2000);
  }, []);

  return (
    <LinearGradient
      colors={[
        GlobalInclude.Color.primaryColor,
        GlobalInclude.Color.secondryColor,
      ]}
      style={styles.container}>
      <View style={styles.content}>
        <Image source={GlobalInclude.Assets.splashLogo} style={styles.image} />
      </View>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get('window').width;

export default SplashScreen;

// style
const styles = StyleSheet.create({
  image: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
});

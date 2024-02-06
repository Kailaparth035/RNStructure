import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../Theme/Color';
import {scale} from '../../Theme/Font/Scalling';
import {IMAGES} from '../../Theme/Images';
import styles from './styles';

interface headerProps {
  text?: any;
  onPress?: () => void;
  barOnPress?: () => void;
}
const Header = (props: headerProps) => {
  const {text, onPress, barOnPress} = props;
  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={IMAGES.BACK} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{text}</Text>
      <TouchableOpacity onPress={barOnPress}>
        <Image source={IMAGES.BAR} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;

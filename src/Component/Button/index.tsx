import React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';
import styles from './styles';

interface textProps {
  text: any;
  onPress?: () => void;
  style?: ViewStyle;
}
const Button = (props: textProps) => {
  const {text, onPress, style} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {...style}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;

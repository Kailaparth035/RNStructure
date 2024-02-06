import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalInclude} from '../../helper/global_include';
interface GradientButtonProps {
  buttonText: string;
  onPress: () => void;
}
const GradientButton: React.FC<GradientButtonProps> = ({
  buttonText,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[
          GlobalInclude.Color.primaryColor,
          GlobalInclude.Color.secondryColor,
        ]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '500',
            fontFamily: 'Manrope',
          }}>
          {buttonText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

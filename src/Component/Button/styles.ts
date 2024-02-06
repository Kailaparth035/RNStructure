import {StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Color';
import {FONTS} from '../../Theme/Font';
import {scale} from '../../Theme/Font/Scalling';

const styles = StyleSheet.create({
  text: {
    fontSize: scale(14),
    color: COLORS.WHITE,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_BOLD,
  },
  button: {
    backgroundColor: COLORS.BLACK,
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Color';
import {FONTS} from '../../Theme/Font';
import {scale} from '../../Theme/Font/Scalling';

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(15),
    marginVertical: scale(10),
  },
  backIcon: {height: scale(25), width: scale(25)},
  textStyle: {
    fontSize: scale(15),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_BOLDITALIC,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Color';
import { FONTS } from '../../Theme/Font';
import { scale } from '../../Theme/Font/Scalling';

const styles = StyleSheet.create({
  responseText:{
    fontSize: scale(13),
    color: COLORS.BLACK,
    marginHorizontal: scale(25),
    marginTop:scale(20),
    fontFamily:FONTS.PLAYFAIR_DISPLAY_MEDIUM
  },
  rendercontainer:{
    flexDirection: 'row',
    marginHorizontal: scale(15),
    marginTop: scale(15),
    alignItems:"center",
    backgroundColor:COLORS.BLACK,
    paddingHorizontal:scale(10),
    borderRadius:scale(10)
  },
  renderImg:{
    height: scale(100),
    width: scale(100),
    borderRadius: scale(10),
  },
  renderTextContainer:{flex: scale(6), paddingVertical: scale(10)},
  brandText:{
    fontSize: scale(13),
    color: COLORS.WHITE,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_BOLD,
  },
  categoryText:{
    fontSize: scale(13),
    color: COLORS.WHITE,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    marginTop: scale(5),
  }
});
export default styles;

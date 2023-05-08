import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utilities/constants';

export const styles = StyleSheet.create({
  container: {
    padding: SIZES.size10,
    margin: SIZES.size10,
    borderRadius: SIZES.size10,
    maxWidth: '75%',
  },
  leftContainer: {
    backgroundColor: COLORS.blue,
    marginLeft: SIZES.size10,
    marginRight: SIZES.sizeAuto,
  },
  rightContainer: {
    backgroundColor: COLORS.lightGrey,
    marginLeft: SIZES.sizeAuto,
    marginRight: SIZES.size10,
  },
});

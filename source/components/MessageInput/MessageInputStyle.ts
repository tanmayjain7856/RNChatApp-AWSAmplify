import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utilities/constants';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: SIZES.size10,
  },
  inputContainer: {
    backgroundColor: COLORS.lighterGrey,
    flex: 1,
    marginRight: SIZES.size10,
    borderRadius: SIZES.size25,
    borderWidth: SIZES.size1,
    borderColor: COLORS.lighterGrey2,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: SIZES.size5,
  },
  input: {
    flex: 1,
    marginHorizontal: SIZES.size5,
  },
  icon: {marginHorizontal: SIZES.size5},
  buttonContainer: {
    width: SIZES.size40,
    height: SIZES.size40,
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.size25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

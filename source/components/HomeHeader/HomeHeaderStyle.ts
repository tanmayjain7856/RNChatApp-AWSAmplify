import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SIZES} from '../../utilities/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
    padding: SIZES.size10,
    alignItems: 'center',
    marginLeft: -SIZES.size16,
  },
  profileImage: {
    width: SIZES.size30,
    height: SIZES.size30,
    borderRadius: SIZES.size30,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    marginLeft: SIZES.size50,
    fontWeight: '700',
  },
});

import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utilities/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    padding: SIZES.size10,
  },
  image: {
    height: SIZES.size50,
    width: SIZES.size50,
    borderRadius: SIZES.size25,
    marginRight: SIZES.size10,
  },
  badgeContainer: {
    backgroundColor: COLORS.blue,
    width: SIZES.size20,
    height: SIZES.size20,
    borderRadius: SIZES.size10,
    borderWidth: SIZES.size1,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: SIZES.size45,
    top: SIZES.size10,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: SIZES.size12,
  },
  rightContainer: {flex: 1, justifyContent: 'center'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '700',
    fontSize: SIZES.size18,
    marginBottom: SIZES.size3,
    color: COLORS.black,
  },
  text: {
    color: COLORS.grey,
  },
});

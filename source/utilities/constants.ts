import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COLORS = {
  white: '#FFF',
  black: '#000',
  grey: '#666',
  blue: '#3777F0',
};

export const SIZES = {
  size1: (SCREEN_WIDTH * 0.26) / 100,
  size3: (SCREEN_WIDTH * 0.77) / 100,
  size10: (SCREEN_WIDTH * 2.55) / 100,
  size12: (SCREEN_WIDTH * 2.9) / 100,
  size18: (SCREEN_WIDTH * 4.6) / 100,
  size20: (SCREEN_WIDTH * 4.9) / 100,
  size25: (SCREEN_WIDTH * 6.37) / 100,
  size45: (SCREEN_WIDTH * 11.46) / 100,
  size50: (SCREEN_WIDTH * 12.73) / 100,
};

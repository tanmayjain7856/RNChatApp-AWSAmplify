import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './HomeHeaderStyle';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, SIZES} from '../../utilities/constants';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
        style={styles.profileImage}
      />
      <Text style={styles.text}>Signal</Text>
      <Icon
        name="camera"
        color={COLORS.black}
        size={SIZES.size24}
        style={{marginHorizontal: SIZES.size10}}
      />
      <Icon
        name="edit-2"
        color={COLORS.black}
        size={SIZES.size24}
        style={{marginHorizontal: SIZES.size10}}
      />
    </View>
  );
}

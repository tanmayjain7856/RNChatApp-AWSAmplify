import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './MessageItemStyle';
import {COLORS} from '../../utilities/constants';

export default function MessageItem({message}: any) {
  const myID = 'u1';
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}>
      <Text style={{color: isMe ? COLORS.black : COLORS.white}}>
        {message.content}
      </Text>
    </View>
  );
}

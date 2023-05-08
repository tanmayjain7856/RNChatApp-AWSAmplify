import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './ChatRoomItemStyle';
import {useNavigation} from '@react-navigation/native';
import {ROUTENAMES} from '../../utilities/routeNames';

export default function ChatRoomItem({chatRoom}: any) {
  const user = chatRoom.users[1];

  const navigation: any = useNavigation();

  const onPress = () => {
    navigation.navigate(ROUTENAMES.ChatRoomScreen, {id: chatRoom.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />
      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}

import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './ChatRoomScreenStyle';
import MessageItem from '../../components/MessageItem/MessageItem';
import {chatData} from '../../utilities/dummyData';
import MessageInput from '../../components/MessageInput/MessageInput';
import {useNavigation} from '@react-navigation/native';

export default function ChatRoomScreen() {
  const navigation = useNavigation();

  navigation.setOptions({title: 'Elon Musk'});

  const renderItem = ({item}: any) => {
    return <MessageItem message={item} />;
  };

  return (
    <View style={styles.page}>
      <FlatList data={chatData.messages} renderItem={renderItem} inverted />
      <MessageInput />
    </View>
  );
}

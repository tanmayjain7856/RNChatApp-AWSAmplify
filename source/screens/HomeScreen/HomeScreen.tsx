import React from 'react';
import {View, FlatList} from 'react-native';
import ChatRoomItem from '../../components/ChatRoomItem/ChatRoomItem';
import {styles} from './HomeScreenStyle';
import {chatRoomData} from '../../utilities/dummyData';

export default function HomeScreen() {
  const renderItem = ({item}: any) => {
    return <ChatRoomItem chatRoom={item} />;
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

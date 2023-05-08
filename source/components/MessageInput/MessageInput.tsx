import React, {useState} from 'react';
import {TextInput, View, Pressable, KeyboardAvoidingView} from 'react-native';
import {styles} from './MessageInputStyle';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, isAndroid} from '../../utilities/constants';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log('Message sent successfully.');
    setMessage('');
  };

  const onPlusClicked = () => {
    console.log('Plus button clicked.');
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={isAndroid ? 'height' : 'padding'}>
      <View style={styles.inputContainer}>
        <Icon
          name="emotsmile"
          size={SIZES.size24}
          color={COLORS.darkGrey}
          style={styles.icon}
        />
        <TextInput
          value={message}
          style={styles.input}
          onChangeText={setMessage}
          placeholder="Signal message..."
        />
        <Icon2
          name="camera"
          size={SIZES.size24}
          color={COLORS.darkGrey}
          style={styles.icon}
        />
        <Icon3
          name="microphone-outline"
          size={SIZES.size24}
          color={COLORS.darkGrey}
          style={styles.icon}
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Icon5 name="send" size={SIZES.size18} color={COLORS.white} />
        ) : (
          <Icon4 name="plus" size={SIZES.size24} color={COLORS.white} />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTENAMES} from '../utilities/routeNames';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen/ChatRoomScreen';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import ChatRoomHeader from '../components/ChatRoomHeader/ChatRoomHeader';

const Stack = createNativeStackNavigator();

const CustomHomeHeader = () => {
  return <HomeHeader />;
};

const CustomChatRoomHeader = (props: any) => {
  return <ChatRoomHeader props={props} />;
};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTENAMES.HomeScreen}
          component={HomeScreen}
          options={{headerTitle: CustomHomeHeader}}
        />
        <Stack.Screen
          name={ROUTENAMES.ChatRoomScreen}
          component={ChatRoomScreen}
          options={{
            headerTitle: CustomChatRoomHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

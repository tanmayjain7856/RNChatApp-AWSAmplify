import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTENAMES} from '../utilities/routeNames';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen/ChatRoomScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'none'}}
        initialRouteName={ROUTENAMES.ChatRoomScreen}>
        <Stack.Screen name={ROUTENAMES.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={ROUTENAMES.ChatRoomScreen}
          component={ChatRoomScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

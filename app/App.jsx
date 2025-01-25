import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './component/welcome pages/WelcomePage'; // Welcome screen
import LoginScreen from './component/welcome pages/LoginScreen';
import SignUpScreen from './component/welcome pages/SignupScreen';
import i18n from './i18n';
import TabNavigator from './(tabs)/Tabnavigator';
import ClientInfo from './component/welcome pages/Clientinfo/ClientInfo';
import Profile from './component/profile/Profile';
import { UserProvider } from './UserProvider';
import Players from './(tabs)/Players';
import EditProfile from './component/profile/EditProfile';
import FriendsList from './component/profile/FriendsList';
import MenuTab from './component/profile/MenuTab';
import ShareProfile from './component/profile/ShareProfile';
import ShareLink from './component/profile/ShareLink';
import Settings from './component/profile/Settings';
// Create navigators
const Stack = createNativeStackNavigator();


// Main App Navigation
export default function App() {



  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
         {/* Auth Screens */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ClientInfo" component={ClientInfo} options={{headerShown: false}} />
        {/* Main App Tabs */}
        <Stack.Screen name="HomeTabs" component={TabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='ShareProfile' component={ShareProfile} options={{headerShown: false}} />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}

//@ts-nocheck
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/pages/HomeScreen';
import LibraryScreen from './src/pages/LibraryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === `android`) SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Video" component={LibraryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

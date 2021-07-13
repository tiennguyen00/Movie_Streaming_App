import React from 'react';
import { MovieDetail, Home } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
  // Load Font, (important)
  const [loaded] = useFonts({
    "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
  })
  
  if(!loaded){
    return null;
  }
  // ======================
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />

        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
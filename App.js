import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Inicio'; 
import Sobre from './Sobre'; 
import Cliente from './Cliente'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ title: 'Inicio' }} 
        />
        <Stack.Screen 
          name="Sobre" 
          component={Sobre} 
          options={{ title: 'Sobre' }} 
        />
        <Stack.Screen 
          name="Cliente" 
          component={Cliente} 
          options={{ title: 'Cliente' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

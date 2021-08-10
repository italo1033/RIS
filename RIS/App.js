import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import TelaPrincipal from './src/screens/TelaPrincipal';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

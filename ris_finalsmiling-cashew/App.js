import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './SRC/Screen/Login';
import Comorbidades from './SRC/Screen/Comorbidades';
import TelaPrincipal from './SRC/Screen/TelaPrincipal';
import SplashScreenInitial from './SRC/Screen/SplashScreen/SplashScreenInitial';
import SplashScreenLoading from './SRC/Screen/SplashScreen/SplashScreenLoading';
import CreateQRcode from './SRC/Screen/QRcode/index'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
        name="CreateQRcode" 
        component={CreateQRcode} 
        options={{ headerMode: 'none' }}/>
         <Stack.Screen 

        name="Login" 
        component={Login} 
        options={{ headerMode: 'none' }}/>

        <Stack.Screen 
        name="SplashScreenInitial" 
        component={SplashScreenInitial} 
        options={{ headerMode: 'none' }}/>

        <Stack.Screen 
        name="SplashScreenLoading" 
        component={SplashScreenLoading} 
        options={{ headerMode: 'none' }}/>

        <Stack.Screen 
        name="TelaPrincipal" 
        component={TelaPrincipal} 
        options={{ headerMode: 'none' }}/>

        <Stack.Screen 
        name="Comorbidades" 
        component={Comorbidades}
        options={{
          title: 'Comorbidades',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#00BFFF',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
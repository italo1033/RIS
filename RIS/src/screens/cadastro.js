import * as React from 'react';
import { View, StyleSheet, Text,TextInput, TouchableOpacity, Button } from "react-native";
import { Input } from 'react-native-elements/dist/input/Input';
import TextInputMask from 'react-native-text-input-mask';


export default function Cadastro({ navigation }) {
    
  const logando=()=>{
      navigation.navigate('TelaPrincipal')
    }
      return (
            <View>
              <Text>Entrou pohhha ola mundo e obrigado Deus</Text>
              
              <Button
              onPress={logando}
              title="proximo"/>
              
            
            </View>

        
      );
    };
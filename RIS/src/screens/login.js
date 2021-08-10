import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import TextInputMask from 'react-native-text-input-mask';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function Login({ navigation }) {
  const [text, onChangeText] = React.useState(null);

  const logando=()=>{
    let passar= text
    if( text  === "119.833.934-95"){
      navigation.reset({
        index:0,
        routes:[{name: "TelaPrincipal"}]
      })

      //navigation.navigate('Cadastro')
    }else{
      let a=alert("cpf invalido")
    }

    
}

    return (
      <View style={styles.FundoGeral}>
        
        <TextInputMask 
           
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            mask={"[999].[999].[999]-[99]"}
            placeholder="Informe seu cpf"
            keyboardType="numeric">


        </TextInputMask>
        
        <TouchableOpacity 
            

            style={styles.butao}
            onPress={logando}>
            <Text>Logar</Text>
          
        </TouchableOpacity>


          <View style={styles.Cadastro_E_EsqueciSenha}>
            
            <TouchableOpacity 

            onPress={() => navigation.reset({
              index:0,
              routes:[{name: "Cadastro"}]
            })}>


            <Text style={{ color:"#3EC6C0"}}>Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{ color:"#3EC6C0"}}>Esqueci a Senha</Text>
            </TouchableOpacity>
            
          
          </View>

      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    FundoGeral:{
        flex:1 , 
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    input: {
      color:"#3EC6C0",
      fontSize: 20, 
      borderBottomColor: "red", 
      paddingLeft:20,
     
    },
    Cadastro_E_EsqueciSenha:{
        flexDirection:'column',
        alignItems:"center",
         },
  
    butao:{
      height: 40,
      margin: 12,
      backgroundColor: "#3EC6C0",
      alignItems: 'center',
      paddingTop:10,
      borderRadius:  10
  
    }

  });
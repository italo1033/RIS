import * as React from 'react';
import { styles } from './style';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function CreateQRcode({ navigation }) {

  let a=()=>{
    var v=navigation.navigate('TelaPrincipal')
    return v
  }

  return (
    <View style={styles.FundoGeral}>
      <SafeAreaView>
        <ScrollView>
        <View>
        <Text  style={{ 
          color:"#00BFFF", 
          fontSize:20, 
          textAlign:"center", 
          marginBottom:30}}>
          Olá, seu cadastro foi feito com sucesso, disponibilizaremos para você um QRcode que guardará todas as suas informações de saúde e dados pessoais. Com ele você poderá visualizar por meio do aplicativo RIS ou do sites: www.ris.com seu estado de saúde e exames.</Text>
        </View>

        <View style={{ marginLeft:"35%"}}>


          <QRCode
            value="www.google.com"
          />
        </View>
         
        

         <TouchableOpacity style={styles.ContainerDeBotao}>
         <FontAwesome name="hand-o-right" size={50} color="#00BFFF" />

         </TouchableOpacity>


        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

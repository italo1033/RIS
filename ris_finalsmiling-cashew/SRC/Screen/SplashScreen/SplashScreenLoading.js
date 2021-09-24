import * as React from 'react';
import {
   View,
   Text, 
   TouchableOpacity,
   TextInput, 
   ScrollView, 
   SafeAreaView, 
   Image } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function SplashScreenLoading({navigation}) {

  setTimeout(() => {
    navigation.navigate('');
  },5000);
    return (
      <View style={{flex:1, backgroundColor:"#00BFFF", justifyContent:'center', alignItems:"center"}}>



      <Text 
      style={{fontSize:25,
      color:'#fff'}}
      >Carregando dados ... </Text>
       
       



            </View>
      
    );
  }

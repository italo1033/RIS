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
import { LinearGradient } from 'expo-linear-gradient';



export default function SplashScreenInitial({navigation}) {

  setTimeout(() => {
    navigation.navigate('Login');
  },10000);
    return (
      <LinearGradient
      colors={['#fff','#00BFFF']}
      style={{flex:1, justifyContent:'center', alignItems:"center"}} 
      >
      <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
            <Image
            style={{height:300, width:450}}
              source={require('../../Img/RIS.png')} />
      </View>
      </LinearGradient>
    );
  }

  

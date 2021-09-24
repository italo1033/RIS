import * as React from 'react';
import { useRef, useState } from 'react';
import { styles } from './style';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  Button,
  CheckBox
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Comorbidades({ navigation, route }) {
  const [text, onChangeText] = React.useState(null); //dados do input
  const [diabetes1, setDiabetes1] = useState(false);  //checkBox do não sabe
  const [diabetes2, setDiabetes2] = useState(false);//checkBox de não ter material
  const [hipertencao, setHipertencao] = useState(false);//checkBox de não ter farrementas


  

    
  const logando=()=>{
     navigation.navigate('TelaPrincipal' ,{guardaPeso:route.params?.Peso, guardaIdade:route.params?.Altura, guardaImc:route.params?.Imc})


      //navigation.navigate('TelaPrincipal')
    }
      return (

              
    <View style={styles.container}>


      {/* -------------------------------- Texto ------------------------------------- */}
      <View style={{ margin: 20, }} >

        <Text style={{ color: "#505050", margin: 8, fontSize: 20,fontFamily:"nunito", textAlign: "center" }}>

         Selecione as comorbidades que você possui:

        </Text>

      </View>



      {/*--------------------------------- CheckBox  --------------------------------  */}
      <View style={styles.checkboxconatinerGeral}>
      
      <View style={styles.checkboxContainer}>

        <CheckBox
          value={diabetes1}
          onValueChange={setDiabetes1}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
        />
        <Text style={styles.labelText}>Diabetes Tipo I.</Text>
      </View>


      <View style={styles.checkboxContainer}>
        <CheckBox
          value={diabetes2}
          onValueChange={setDiabetes2}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}

        />
        <Text style={styles.labelText}>Diabetes Tipo II</Text>
      </View>



      <View style={styles.checkboxContainer}>
        <CheckBox

          value={hipertencao}
          onValueChange={setHipertencao}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
        />
        <Text style={styles.labelText}>Hipertenção</Text>
      </View>

      </View>


      {/*--------------------------------- AbA de  texto e botão de prosseguir  --------------------------------  */}

      <View>
        <Text style={{ paddingLeft: 20, fontSize: 15, color: "#505050" }}> Outros: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          multiline
          placeholder="Digite aqui outro motivo"
          value={text} />
      </View>



      <View >
        <TouchableOpacity style={styles.button}
        onPress={logando}>
          <Text style={{color:"#fff"}}>Procesguir</Text>
        </TouchableOpacity>
      </View>



    </View>
        
      );
    }
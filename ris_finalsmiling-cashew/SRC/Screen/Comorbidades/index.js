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
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox } from 'react-native-elements'


export default function Comorbidades({ navigation, route }) {
  const [text, onChangeText] = React.useState(null); //dados do input
  const [diabetes1, setDiabetes1] = useState(false);  //checkBox do não sabe
  const [diabetes2, setDiabetes2] = useState(false);//checkBox de não ter material
  const [hipertencao, setHipertencao] = useState(false);//checkBox de não ter farrementas
  const [Anemia, setAnemia] = useState(false);//checkBox de não ter farrementas
  const [AIDs, setAIDs] = useState(false);//checkBox de não ter farrementas[
  const [Cancer, setCancer] = useState(false);//checkBox de não ter farrementas
  const [Cardiopatia, setCardiopatia] = useState(false);//checkBox de não ter farrementas


  

    
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


        <CheckBox
          value={diabetes1}
          onValueChange={setDiabetes1}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          title="Diabetes Tipo I"
          checked={diabetes1}
          onPress={() => setDiabetes1({checked: !diabetes1})}
        />
  

        <CheckBox
          value={diabetes2}
          onValueChange={setDiabetes2}
          title="Diabetes Tipo II"
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          checked={diabetes2}
          onPress={() => setDiabetes2({checked: !diabetes2})}

        />

        <CheckBox

          value={hipertencao}
          onValueChange={setHipertencao}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          title="Hipertenção"
          checked={hipertencao}
          onPress={() => setHipertencao({checked: !hipertencao})}
        />

        <CheckBox

          value={Anemia}
          onValueChange={setAnemia}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          title="Anemia"
          checked={Anemia}
          onPress={() => setAnemia({checked: !Anemia})}
        />


        <CheckBox

          value={Cancer}
          onValueChange={setCancer}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          title="Câncer"
          checked={Cancer}
          onPress={() => setCancer({checked: !Cancer})}

        />

        <CheckBox

          value={Cardiopatia}
          onValueChange={setCardiopatia}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          title="Cardiopatia"
          checked={Cardiopatia}
          onPress={() => setCardiopatia({checked: !Cardiopatia})}
        />


        <CheckBox

          value={AIDs}
          onValueChange={setAIDs}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          title="AIDs"
          checked={AIDs}
          onPress={() => setAIDs({checked: !AIDs})}
        />






      






      </View>


      {/*--------------------------------- AbA de  texto e botão de prosseguir  --------------------------------  */}

      <View>
        <Text style={{ paddingLeft: 20, fontSize: 15, color: "#505050" }}> Outros: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          multiline
          placeholder="Digite aqui outro Comorbidade"
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
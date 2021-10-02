import * as React from 'react';
import { styles } from './style';
import { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Slider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';


const Stack = createStackNavigator();

export default function Login({ navigation }) {
  const [UserName, setUserName] = React.useState('');
  const [Senha, setSenha] = React.useState('');
  const [aparecerSenha, setAparecerSenha] = React.useState(true);

    // --------------------------USESTATE MODELISE------------------------

  const modalizeRef = useRef(null);
  const [nomeCompleto, setnomeCompleto] = React.useState('');
  const [cpf, setcpf] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [cartaoDoSus, setCartaoDoSus] = React.useState('');
  const [senhaDoUsuario, setSenhaDoUsuario] = React.useState('');
  const [confirmacaoDeSenha, setConfirmacaoDeSenha] = React.useState('');
  const [peso, setpeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const[valueSelect , setValueSelect] = React.useState('');



  const onOpen = () => {
    modalizeRef.current?.open();
  };
  
  const logando = () => {
    
    let array=[nomeCompleto, cpf, rg, cartaoDoSus, senhaDoUsuario,confirmacaoDeSenha,peso,altura,idade]

    for (let loopArray in array){
       if(array[loopArray] == false){
        alert("Cadastro incompleto, Por favor preencha  todos os campos antes de Prosseguir!")
      }else{
        let imc=peso/(altura*altura)
        navigation.navigate('Comorbidades' ,{Peso:peso, Altura:altura, Imc:imc.toFixed(1)})
      }
    }
  };
  
  const logandoTelaPrincipal = () => {
    if (UserName === 'italo' && Senha === '12345') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'TelaPrincipal'}],
      });

      //navigation.navigate('Cadastro')
    } else {
      let a = alert('Login ou incorreta');
    }
  };

  return (

    // ------------------------------------FUNDO GERAL PARA TODOS-----------------------------------
    <View style={styles.FundoGeral}>
      <Image
        style={styles.imageQRCODE}
        source={require('../../Img/RIS.png')}
      />
          
          {/* -------------------------------SCROOLLVIEW------------------------- */}

      <SafeAreaView style={styles.SubfundoBranco}>
        <ScrollView style={{ marginTop: 20, marginBottom:20 }}>



          {/* -------------------------------INPUTS------------------------- */}
          <Text style={{ marginLeft: 10, color: "#00BFFF" }}> Login: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={UserName} />


          <Text style={{ marginLeft: 10, color: "#00BFFF" }}> Senha: </Text>
          <View style={styles.InputPassword}>
          
          <TextInput
          style={{width:'85%', fontSize:25, paddingLeft:10}}
          onChangeText={setSenha}
          maxLength={8}
          secureTextEntry={aparecerSenha}
          value={Senha} />

          <TouchableOpacity 
          style={{paddingRight:20}}
          onPress={ () => setAparecerSenha(!aparecerSenha)}>

         <Ionicons
         name="eye" size={32} color="#00BFFF" />

            
          </TouchableOpacity>
          
          </View>
          
          {/* -------------------------------BUTÕES------------------------- */}
          <TouchableOpacity style={styles.butao} onPress={logandoTelaPrincipal}>
            <Text style={{ color: '#FFF' }}>Logar</Text>
          </TouchableOpacity>

          <View style={styles.Cadastro_E_EsqueciSenha}>
            <TouchableOpacity
              onPress={onOpen}>

              <Text style={{ color: '#00BFFF', paddingLeft: 40}}>Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ color: '#00BFFF', paddingLeft:60}}>
                Esqueci a Senha
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>




      
       {/* -------------------------------MODALIZE DE CADASTROS------------------------- */}
      
      <Modalize ref={modalizeRef}
      snapPoint={450}>
      <LinearGradient colors={['#00BFFF', '#fff']}>
      <View>

      <Text style={{ marginLeft: 10 }}> Nome Completo: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setnomeCompleto}
          value={nomeCompleto} />

      <Text style={{ marginLeft: 10 }}> CPF: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setcpf}
          placeholder="000.000.000-00"
          maxLength={11}
          keyboardType="numeric"
          value={cpf} />
      <Text style={{ marginLeft: 10 }}> RG: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setRg}
           placeholder="0000000-0"
           maxLength={8}
           keyboardType="numeric"
          value={rg} />

      <Text style={{ marginLeft: 10}}> Cartao Do Sus: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setCartaoDoSus}
          placeholder="000 0000 0000 0000"
          maxLength={15}
          keyboardType="numeric"
          value={cartaoDoSus} />


      <Text style={{ marginLeft: 10}}> altura: </Text>
          <TextInput
          style={styles.input}
          maxLength={4}
          onChangeText={setAltura}
          placeholder="1.70 m"
          keyboardType="numeric"
          value={altura} />

      <Text style={{ marginLeft: 10}}> Idade: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setIdade}
          maxLength={3}
          placeholder="24"
          keyboardType="numeric"
          value={idade} />

      <Text style={{ marginLeft: 20, fontSize:20}}>Peso: {peso} kg </Text>

       <Slider
            style={styles.inputSlide}
            value={peso}
            onValueChange={setpeso}
            maximumValue={150}
            minimumValue={0}
            step={0.5}
            maximumTrackTintColor="#fff"
            minimumTrackTintColor="#00BFFF"
            trackStyle={{ height: 10, backgroundColor: 'transparent' }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
            thumbProps={{
              children: (
                <Icon
                  name="balance-scale-right"
                  type="font-awesome-5"
                  size={20}
                  reverse
                  containerStyle={{ bottom: 20, right: 20 }}
                  color="#00BFFF"
                />
              ),
            }}
          />

          <Text style={{ marginLeft: 20, fontSize:20}}>Sexo:</Text>

          <Picker
        style={styles.input}
        selectedValue={valueSelect}
        onValueChange={(itemValue, itemIndex) =>
          setValueSelect(itemValue)
        }>
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>

      <Text style={{ marginLeft: 10, marginTop:10 }}> Senha: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setSenhaDoUsuario}
          value={senhaDoUsuario} />
      <Text style={{ marginLeft: 10,  marginTop:10 }}> Confirmação de Senha: </Text>
          <TextInput
          style={styles.input}
          onChangeText={setConfirmacaoDeSenha}
          value={confirmacaoDeSenha} />
      </View>

      <TouchableOpacity style={styles.button}
        onPress={logando}>
          <Text style={{color:"#fff"}}>Procesguir</Text>
        </TouchableOpacity>
      </LinearGradient>
      </Modalize>
    </View>
  );
}

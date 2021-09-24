import * as React from 'react';
import { styles } from './style';
import { useRef, useState } from 'react';
import {
  View,
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
import Tooltip from 'react-native-walkthrough-tooltip';
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'

const Stack = createStackNavigator();

export default function TelaPrincipal ({ navigation, route }) {

  var [textdoImc, setTextdoImc]= React.useState(null);

    // --------------------------USESTATES------------------------




    // -------------------------- MODELISE------------------------


   const modalizeRef = useRef(null);

   const onOpen = () => {
    modalizeRef.current?.open();
  };

  // --------------------------GRAFICO DE IMC------------------------


  const data = [ 8,14,18.5,20,24.9,25,29.9,30,34.9,35,39.9,40 ]
  data.push(route.params?.guardaImc)
  data.sort(function(a, b){return a - b})
  var valueImcQuadro

  for (let valor in data){
    if(data[valor] == route.params?.guardaImc ){
      valueImcQuadro= valor
    }

  }

        /**
         * Both below functions should preferably be their own React Components
         */


        const HorizontalLine = (({ y }) => (
            <Line
                key={ 'zero-axis' }
                x1={ '0%' }
                x2={ '100%' }
                y1={ y(50) }
                y2={ y(50) }
                stroke={ 'grey' }
                strokeDasharray={ [ 4, 8 ] }
                strokeWidth={ 2 }
            />
        ))

        const Tooltip = ({ x, y }) => (
            <G
                x={ x(valueImcQuadro) - (75 / 2) } 
                key={ 'tooltip' } //o x é onde fica o ponteiro
                onPress={ () => console.log('tooltip clicked') }
            >
                <G y={ 50 }>
                    <Rect
                        height={ 40 }
                        width={ 70 }
                        stroke={ 'grey' }
                        fill={ 'white' }
                        ry={ 10 }
                        rx={ 10 }
                    />
                    <Text
                        x={ 70 / 2 }
                        dy={ 20 }
                        alignmentBaseline={ 'middle' }
                        textAnchor={ 'middle' }
                        stroke={ 'rgb(134, 65, 244)' }
                    >
                        { `${data[valueImcQuadro]}ºC` }
                    </Text>
                </G>
                <G x={ 75 / 2 }>
                    <Line
                        y1={ 50 + 40 }
                        y2={ y(data[ valueImcQuadro ]) }
                        stroke={ 'grey' }
                        strokeWidth={ 2 }
                    />
                    <Circle
                        cy={ y(data[ valueImcQuadro ]) } //coloca o circulozinho no meio no ponto correto
                        r={ 10 } //tamanho o circulozinho no meio no ponto correto
                        stroke={ 'rgb(134, 65, 244)' }
                        strokeWidth={ 10 }
                        fill={ 'white' }
                    />
                </G>
            </G>
        )

          // --------------------------FUNÇÕES------------------------

            const imc=route.params?.guardaImc
                if (imc < 17){
                 textdoImc= "Muito abaixo do peso o ideal é procurar um nutricionista."
                }else if(imc >= 17 && imc <= 18.49){
                  textdoImc= "Abaixo do peso  procure um nutricionista."
                }else if(imc >= 18.5 && imc <= 24.99){
                 textdoImc= "Baseado em seus Dados seu Peso está normal, não pare de se alimenta bem, prátique exercicios fisicos e procuro profissionais da saúde para lhe auxiliar."
                }else if(imc >= 25 && imc <= 29.99){
                  textdoImc= "Acima do peso você está acima do peso, por favor procure um nutricionista para lhe auxiliar"
                }else if(imc >= 30 && imc <= 34.99){
                 textdoImc= "Obesidade I:Nesta fase a pessoa passa a ser considerada obesa, ou seja, é considerada uma “doença”, pois a obesidade pode vir a desencadear uma série de problemas: Nesta etapa, a simples prática de exercícios esporadicamente (sair do sedentarismo) já não é mais suficiente, é preciso estabelecer uma rotina de exercícios. Além disso, iniciar uma reeducação alimentar é fundamental."
                }else if(imc >= 35 && imc <= 39.99){
                  textdoImc= "Obesidade II (severa): O 2 grau de obesidade corresponde ao IMC 35 a 39,9. Neste caso, a pessoa já está bem acima do peso e pode, inclusive, já apresentar sintomas de doenças relacionas em decorrência da obesidade.Talvez agora esteja se perguntando, nestes casos, como fazer para retornar aos estágios anteriores de obesidade?Você precisará fazer uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e consultar um médico especialista (endócrino). Também, uma rotina de exercícios intensos, provavelmente aeróbicos (para emagrecer). Neste estágio, é preciso se dedicar muito para conseguir perder peso.Inclusive, dependendo da idade, peso, saúde atual, entre outros fatores, pode vir a ser recomendado pelo médico a utilização de alguns remédios para emagrecer e diminuir o apetite."
                }else if(imc >= 40 ){
                  textdoImc= "Obesidade III (mórbida):O último grau de obesidade é o 3, e acredite, nesta fase sua força de vontade tem de ser absurda. Dependendo das suas condições, é provável que receba a orientação de realizar uma cirurgia.Mesmo que difícil a reversão da obesidade grau 3, um tratamento adequado pode solucionar ou diminuir, conseguindo chegar até o sobrepeso.Dentre as opções de cirurgias para a obesidade estão as restritivas (Banda Gástrica e Gastroplastica Vertical), e as mistas, as quais ao mesmo tempo restringem os alimentos ingeridos e também restringe a absorção do organismo dos alimentos ingeridos (Cirurgia Fobi-Capella, Derivação Duodenal e Scopinaro)."
                }

          



 

  return (
    <View style={styles.FundoGeral}>
      <SafeAreaView>
        <ScrollView>
         <TouchableOpacity onPress={onOpen} style={styles.ContainerDeBotao}>
         <Text>Relatótio Pessoal</Text>
         </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>


                 {/* -------------------------------MODALIZE DE CADASTROS------------------------- */}
      
      <Modalize ref={modalizeRef}
      snapPoint={450}>
      <LinearGradient colors={['#00BFFF', '#fff']}>


      <View>


      <Text style={{ margin: 8, fontSize: 20,fontFamily:"nunito", textAlign: "center" }}> O peso é Proporcional a altura, por isso que muitas vezes uma pessoa alta tem pesos igual ou maior o de uma pessoa baixa entretanto fisicamente não aparenta está acima do peso.</Text>


        <Text style={{ marginLeft: 20, fontSize:20}}>Peso: {route.params?.guardaPeso} kg </Text>

       <Slider
            style={styles.inputSlide}
            value={route.params?.guardaPeso}
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

          <Text style={{  margin: 8, fontSize: 20,fontFamily:"nunito", textAlign: "center" }}>Por isso que na maioria das vezes o ideal é fazer o calculo do imc(Indice de massa Corparal) que serve para avaliar se a pessoa está dentro do seu peso ideal em relação à altura.</Text>

         <Text style={{ marginLeft: 20, fontSize:20}}>IMC: {route.params?.guardaImc} </Text>


                <LineChart
                style={{ height: 350 }}
                data={ data }
                svg={{
                    stroke: 'rgb(0, 191, 255)',
                    strokeWidth: 5,
                }}
                contentInset={{ top: 60, bottom: 60 }}
                curve={ shape.curveLinear }
            >
                <Grid/>
                <HorizontalLine/>
                <Tooltip/>
            </LineChart>


        <Text style={{ margin: 8, fontSize: 20,fontFamily:"nunito", textAlign: "center" }}>{textdoImc}</Text>


       
      </View>


      </LinearGradient>

      
      
      </Modalize>
    </View>
  );
}

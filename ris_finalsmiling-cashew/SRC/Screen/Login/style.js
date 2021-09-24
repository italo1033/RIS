import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({



//----------------------------------FUNDOS -----------------------------------------------
    FundoGeral:{
      flex:1,
      justifyContent:"center",
      alignItems:"center", 
      backgroundColor: "#00BFFF"
    },
    SubfundoBranco:{
      marginTop:40,
      backgroundColor:'#fff',
      width:280,
      borderTopLeftRadius:5,
      borderTopRightRadius:25,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:5,
      justifyContent:"center",
      marginBottom:20
      
    },


//-----------------------------------------------lOGIN ---------------------------------------------------
    Cadastro_E_EsqueciSenha:{
        flexDirection:'row',
        alignItems:"center",
        
    },
  
    butao:{
      height: 40,
      margin: 12,
      backgroundColor: "#00BFFF",
      alignItems: 'center',
      paddingTop:10,
      borderRadius:  10
  
    },
    input: {
    height: 40,
    margin: 12,
    backgroundColor:"#fff",
    borderColor:"gray",
    borderRadius:10,
    borderWidth: 1,
    paddingLeft:10
  },
  InputPassword:{
    flexDirection:"row",
    height: 40,
    margin: 12,
    backgroundColor:"#fff",
    borderColor:"gray",
    borderRadius:10,
    borderWidth: 1,
  },
//-----------------------------------------------IMAGEM E ICONES ---------------------------------------------------
  imageQRCODE:{
    marginTop:20,
    height:120,
    width:120
  },














  //-----------------------------------------------MODILIZE---------------------------------------------------



  FundoGeralModilize:{
    backgroundColor:"#fff"
  },
   
    button:{
    height: 40,
    margin: 12,
    backgroundColor: "#00BFFF",
    alignItems: 'center',
    paddingTop:10,
    borderRadius:  10
  },
  inputSlide: {
    height: 40,
    margin: 12,
    borderRadius:10,
    paddingLeft:10
  },

  
});
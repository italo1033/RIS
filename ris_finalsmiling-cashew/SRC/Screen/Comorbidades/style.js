import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

container: {
    backgroundColor:"#fff",
    paddingTop:50,
    alignItems:"center",
    flex: 1,
  },



  //---------------------styles  do checkeBox------------------------------------------

  checkboxconatinerGeral: { 
    justifyContent:"center",

    

  },
  checkbox: {
    tintColor:"#00BFFF",
    backgroundColor:"red",
    
  },
  labelText: {
  color :"#505050",
    margin: 8,
  },
 
  //---------------------styles  do Do Input e botoes------------------------------------------
 
    button:{
    height: 40,
    margin: 12,
    width:290,
    backgroundColor: "#00BFFF",
    alignItems: 'center',
    paddingTop:10,
    borderRadius:  10
  },
   input: {
    backgroundColor:"#fff",
    width:290,
    height: 100,
    margin: 12,
    borderColor:"gray",
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
});
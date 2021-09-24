import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

container: {
    backgroundColor:"#fff",
    paddingTop:50,
    flex: 1,
  },



  //---------------------styles  do checkeBox------------------------------------------

  checkboxconatinerGeral: { 
    marginLeft:90

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    
  },
  checkbox: {
    alignSelf: "center",
    marginLeft:5,
    tintColor:"#00BFFF"
    
  },
  labelText: {
  color :"#505050",
    margin: 8,
  },
 
  //---------------------styles  do Do Input e botoes------------------------------------------
 
    button:{
    height: 40,
    margin: 12,
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
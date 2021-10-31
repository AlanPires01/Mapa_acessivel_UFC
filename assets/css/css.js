import {StyleSheet} from 'react-native';


const css = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  titulo:{
    fontSize:30,
    color:'black',
    textAlign: "center",
    width:'100%', 
  },
  subtitulo:{
    fontSize:21,
    color:'black',
    width:'90%',
  },
  texto:{
    justifyContent:'flex-start',
    margin:10,
    fontSize:14,
  },
  botao:{
    justifyContent: 'center',
    width: "90%", 
    margin: 21, 
  },
   icon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
  },
  iconApp: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5,
  },
   logoApp: {
    width: 150,
    height: 150,
    borderRadius:30,
    margin: 10,
  },
  linksContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  linksList: {
    width: '95%',
  },
  linksButtons: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    borderRadius: 5,
    margin: 5,
  },
  linksText: {
    color: 'white',
  },
});
export {css};
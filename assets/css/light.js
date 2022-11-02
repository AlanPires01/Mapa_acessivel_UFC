import {StyleSheet} from 'react-native';

const light = StyleSheet.create({
  aviso:{
    textAlign:"center", 
    margin: 20,
  },
  tarefa2:{
    textAlign:"center", 
    margin: 10,
  },
  carregando:{
    textAlign:"center", 
    fontWeight:"bold"
  },
  option:{
    backgroundColor:"white",
    marginBottom:10
  },
  saldoInput:{
    paddingVertical:10,
    paddingHorizontal:4,
    borderWidth:1
  },
  even:{
    backgroundColor:"#DEDFE3"
  },
  odd:{
    backgroundColor:"#F9FBFD"
  },
  actionContainer:{
    paddingVertical:10,
    borderWidth:1,
    borderColor:"#DEDFE3"
  },
  container:{
    flex:1, 
    backgroundColor:'white',
  },
  titulo:{
    fontSize:30,
    marginTop:10,
    color:'black',
    textAlign: "center",
    width:'100%', 
  },
  subtitulo:{
    fontSize:21,
    color:'black',
    width:'90%',
  },
  subtitulo2:{
    fontSize:19,
    color:'black',
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
    color: 'black',
  },
  taeImage:{
    justifyContent:'center',
    alignItems:'center',
    margin:3,
  },
  subtituloSobreNos:{
    textAlign:'center',
    fontSize:21,
    color:'black',
  },
  paragrafo:{
    color:'black',
  },

  //mapas
  textMap:{
    color:'black',
    textAlign: "center", 
  },
  mapaButton: {
		width: "50%",
		flex:1,
		alignItems: "center",
		paddingVertical: 4,
		backgroundColor: "white"
	},
	selecionado: {
		color: "#3686ff",
		backgroundColor: "#eee"
	},
	mapButtonText: {
		fontSize: 10,
		color: "gray"
	},
	descricoesContainer: {
		width: "40%",
		backgroundColor: "#fff",
		right: 0,
		top: 50,
		margin: 2,
		borderRadius: 4,
		borderWidth: 1,
		position: "absolute",
		zIndex: 100
	},
	descricoesHeader: {
		backgroundColor: "#ddd",
		padding: 4
	},
	descricoesContent: {
		padding: 10,
		paddingBottom: 10,
		maxHeight: 400
	},

  //SIGAA
  inputSigaa:{
		borderWidth: 1,
    height: 49,
		borderColor: '#016EA4',
		padding: 10,
		marginBottom: 20
	},
  inputSenha:{
    width: '82.5%',
    height: 49,
		borderWidth: 1,
		borderColor: '#016EA4',
		padding: 10,
		marginBottom: 20,
    borderRightWidth: 0,
	},
  iconEye:{
    width: '200%',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
		borderColor: '#016EA4',
    borderLeftWidth: 0,
  },
	containerSigaa:{
		flex: 1,
		alignItems: 'center',
		padding:20
	},
	textSigaa:{
		fontSize:40,
		margin:20,
		color:'#016EA4'
	},
	inputContainerSigaa:{
		width:'80%'
	},	
  inputContainerSenha:{
    flexDirection: 'row',
		width:'80%'
	},	
  fileContainerSIGAA: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc"
  },
  containerSIGAA: {
      padding: 10,
      marginBottom: 40
  },
  menuButton:{
		paddingVertical:15,
		fontSize: 45,
		fontWeight: 'bold',
		backgroundColor: '#ffe',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		marginBottom:10,
		borderWidth:1,
		borderColor:"#aaa"

	},
	menuText:{
		color:'black',
	},
	menuTextTitle:{
		fontSize:15,
		paddingVertical:10,
		textAlign:"center"
	},
	menuContainer: {
		padding: 10
	},
  contraste:{
		color:'white',
	},

  
  participantsContainer:{
    padding:10,
  },
  listaAlunosContainer: {
      marginBottom: 80
  },
  listaProfessoresContainer: {
      marginBottom: 80,
  },
  alunoContainer: {
      paddingVertical: 10,
      paddingHorizontal: 4,
      backgroundColor: "#ddd",
      marginBottom: 4,
  },
  button: {
      borderWidth: 1,
      borderColor: "black",
      padding: 5,
      width: "30%",
      marginTop: 10,
      marginBottom: 10
  },
  buttonSelecionado: {
      backgroundColor: "#ccc"
  },
  leftButton: {
      borderRightWidth: 0,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
  },
  rigthButton: {
      borderLeftWidth: 0,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
  },
  buttonContainer: {
      flexDirection: "row",
      justifyContent: "flex-start"
  },


  labelTextS:{
		fontWeight:'bold',
	},
	textS:{
		marginTop: 2,
		marginBottom: 10,
		fontFamily: 'monospace'
	},
	containerS:{
		padding:10,
		paddingBottom: 50
	},
	buttonS:{
		paddingVertical:10,
		marginVertical: 2,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#ffe',
		borderWidth: 1,
		borderColor: '#aaa'
	},
	newsListContainerS:{
		paddingBottom: 90,
		padding: 10
	},
	textTitleS:{
		fontSize:20,
		fontWeight:'bold',
		lineHeight: 40
	},

  frequencyContainer:{
		padding:10,
	},
	textF:{
		padding: 10,
		backgroundColor: "#ddd",
		borderBottomWidth: 1,
	},
	infoText: {
		padding: 5,
		backgroundColor: "#ddd",
		borderBottomWidth: 1
	},
  text4:{
    fontWeight:'bold', 
    marginTop: 10
  },
  text5:{
    textAlign:"center", 
    padding:10
  },
  gradesContainer: {
		padding:10
	},
  notasGrades:{
    borderWidth:1, 
    padding: 10, 
  },
  textoCor:{
    color:'black'
  },
  tarefaContainer: {
    padding: 10,
    marginBottom: 40
  },
  tarefa: {
      backgroundColor: "#ddd",
      marginTop: 10,
      padding: 5
  },
  tarefaTitle: {
      fontSize: 15,
      color:"black",
      marginBottom: 4,
      fontWeight:'bold',
  },
  tarefaEnviada: {
      backgroundColor: "#dfd"
  },
  tarefaNaoEnviada: {
      backgroundColor: "#fdd"
  },
});
export {light};
import {StyleSheet} from 'react-native';

const dark = StyleSheet.create({
  aviso:{
    textAlign:"center", 
    margin: 20,
    color: 'white',
  },
  tarefa2:{
    textAlign:"center", 
    margin: 10,
    color: 'white',
  },
  carregando:{
    textAlign:"center", 
    fontWeight:"bold",
    color: 'white'
  },
  option:{
    backgroundColor:"#9fc5e8",
    marginBottom:10
  },
  saldoInput:{
    paddingVertical:10,
    paddingHorizontal:4,
    backgroundColor:"#9fc5e8",
    borderWidth:1
  },
  even:{
    backgroundColor:"#9fc5e8"
  },
  odd:{
    backgroundColor:"#9fc5e8"
  },
  actionContainer:{
    paddingVertical:10,
    borderWidth:1,
    borderColor:"#0d0e21"
  },
  container:{
    flex:1, 
    backgroundColor:'#0d0e21',
  },
  titulo:{
    fontSize:30,
    marginTop:1,
    color:'white',
    textAlign: "center",
    width:'100%', 
  },
  subtitulo:{
    fontSize:21,
    color:'white',
    width:'90%',
  },
  subtitulo2:{
    fontSize:19,
    color:'white',
  },
  texto:{
    justifyContent:'flex-start',
    margin:10,
    fontSize:14,
    color:'white',
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
    backgroundColor:'white',
  },
  iconApp: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor:'#016EA4',
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
    backgroundColor: '#0d0e21',
  },
  linksList: {
    width: '95%',
  },
  linksButtons: {
    backgroundColor: '#023e5c',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    borderRadius: 5,
    margin: 5,
  },
  linksText: {
    color: 'white',
  },
  taeImage:{
   justifyContent:'center',
   alignItems:'center',
   margin:3,
  },
  subtituloSobreNos:{
    textAlign:'center',
    fontSize:21,
    color:'white',
  },
  paragrafo:{
    color:'white',
  },

  //mapas
  textMap:{
    color:'white',
    textAlign: "center", 
  },
  iconMap:{
    color:'white'
  },
  mapaButton: {
		width: "50%",
		flex:1,
		alignItems: "center",
		paddingVertical: 4,
		backgroundColor: "black"
	},
	selecionado: {
		color: "#3686ff",
		backgroundColor: "#000"
	},
	mapButtonText: {
		fontSize: 10,
		color: "gray"
	},
	descricoesContainer: {
		width: "40%",
		backgroundColor: "#252a4d",
		right: 0,
		top: 50,
		margin: 2,
		borderRadius: 4,
		borderWidth: 1,
		position: "absolute",
		zIndex: 100
	},
	descricoesHeader: {
		backgroundColor: "#11194a",
		padding: 4,
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
		marginBottom: 20,
    backgroundColor: '#ccc',
    color:'#000'
	},
  inputSenha:{
    width: '82.5%',
    height: 49,
		borderWidth: 1,
		borderColor: '#016EA4',
		padding: 10,
		marginBottom: 20,
    backgroundColor: '#ccc',
    color:'#000',
    borderRightWidth: 0,
	},
  iconEye:{
    width: '200%',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderWidth: 1,
		borderColor: '#016EA4',
    borderLeftWidth: 0,
  },
	containerSigaa:{
		flex: 1,
		alignItems: 'center',
		padding:20,
    backgroundColor: '#0d0e21',
	},
	textSigaa:{
		fontSize:40,
		margin:20,
		color:'#ccc'
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
    backgroundColor: "#9fc5e8"
  },
  containerSIGAA: {
    padding: 10,
    marginBottom: 40,
    backgroundColor: "#0d0e21",
    flex: 1,
  },
  menuButton:{
		paddingVertical:15,
		fontSize: 45,
		fontWeight: 'bold',
		backgroundColor: '#9fc5e8',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		marginBottom:10,
		borderWidth:1,
		borderColor:"#aaa",
	},
	menuText:{
		color:'black',
	},
	menuTextTitle:{
		fontSize:15,
		paddingVertical:10,
		textAlign:"center",
    color:'white',
	},
	menuContainer: {
		padding: 10,
    backgroundColor: "#0d0e21",
    fex: 1
	},
  contraste:{
		color:'black',
	},

  
  participantsContainer:{
    padding:10,
    backgroundColor: "#0d0e21",
    flex: 1
  },
  listaAlunosContainer: {
    marginBottom: 0,
  },
  listaProfessoresContainer: {
    marginBottom: 0,
  },
  alunoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    backgroundColor: "#9fc5e8",
    marginBottom: 4,
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    width: "30%",
    marginTop: 10,
    marginBottom: 10
  },
  buttonSelecionado: {
    backgroundColor: "#016EA4"
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
    color: 'white',
	},
	textS:{
		marginTop: 2,
    color: 'white',
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
		backgroundColor: '#9fc5e8',
		borderWidth: 1,
		borderColor: '#aaa'
	},
	newsListContainerS:{
		paddingBottom: 90,
		padding: 10
	},
	textTitleS:{
    color: 'white',
		fontSize:20,
		fontWeight:'bold',
		lineHeight: 40
	},


  frequencyContainer:{
		padding:10,
	},
	textF:{
		padding: 10,
		backgroundColor: "#9fc5e8",
		borderBottomWidth: 1,
	},
	infoText: {
		padding: 5,
		backgroundColor: "#ddd",
		borderBottomWidth: 1
	},
  text4:{
    fontWeight:'bold', 
    marginTop: 10,
    color: 'white',
  },
  text5:{
    color: 'white',
    textAlign:"center", 
    padding:10
  },
  gradesContainer: {
		padding:10,
	},
  notasGrades:{
    borderWidth:1, 
    padding: 10, 
    borderColor: '#016EA4'
  },
  textoCor:{
    color:'white'
  },
  tarefaContainer: {
    padding: 10,
    marginBottom: 40,
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
  vinculosContainer:{
    backgroundColor: "#0d0e21",
    flex: 1,
    padding: 10,
  },
   vinculosText: {
    color:"white",
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 17
   },
    vinculosComponentContainer:{
        margin: 10,
        padding: 5,
        backgroundColor: "#9fc5e8",
    },
    vinculosComponentText:{
        color: "black"
    }
});
export {dark};

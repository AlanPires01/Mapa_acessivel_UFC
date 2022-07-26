import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {logIN, acessarPaginaInicial, getNewSessionID, GetHeaders} from './Sigaa-utils.js';
import PaginaInicial from './PaginaInicial.js';


export default function Sigga(){

	const [user, setUser] = React.useState('');
	const [senha, setSenha] = React.useState('');
	const [sessionID, setSessionID] = React.useState('');
	const [loginState, setLoginState] = React.useState(false);

	const logar = async()=>{
		if(user === '' || senha === ''){
			Alert.alert("Aviso!", "O campo de usuário e senha não podem estar vazios");
			return;
		}

		const session = await getNewSessionID();
		if(session === ''){
			Alert.alert("Erro de login!", "Verifique sua conexão de internet!");
			return;
		}
		const resposta = await logIN(user, senha, session);
		if(resposta === false){
			Alert.alert("Erro de login!", "Usuário ou senhas incorretos!");
			return;
		}

		await acessarPaginaInicial(session);
		setSessionID(session);
		setLoginState(true);
	}

	const logOff = () =>{
		Alert.alert("Sair", "Deseja sair do sigaa?", [{text: "Cancelar"}, {text: "Ok", onPress: ()=>{
			fetch("https://si3.ufc.br/sigaa/logar.do?dispatch=logOff", {
				method: "get",
				headers: GetHeaders(sessionID)
			}).then((a)=>{}).catch((b)=>{});
			setSessionID('');
			setLoginState(false);
			setUser('');
			setSenha('');
		}}]);
	}
	
	return (
		!loginState ? (
			<View style={estilos.container}>
				<Text accessible={false} style={estilos.text}> SIGAA </Text>
				<View style={estilos.inputContainer}>
					<TextInput style={estilos.input} onChangeText={(e)=>setUser(e)} placeholder={'Usuário'}/>
					<TextInput style={estilos.input} onChangeText={(e)=>setSenha(e)} placeholder={'Senha'}/>
					<Button accessibilityLabel="Clique para fazer login no SIGAA" title={"Entrar"} onPress={logar}/>
				</View>
			</View>
		) : (
			<PaginaInicial sessionID={sessionID} handler={logOff}/>
		)
	)
}

const estilos = {
	input:{
		borderWidth: 1,
		borderColor: '#016EA4',
		padding: 10,
		marginBottom: 20
	},
	container:{
		flex: 1,
		alignItems: 'center',
		padding:20
	},
	text:{
		fontSize:40,
		margin:20,
		color:'#016EA4'
	},
	inputContainer:{
		width:'80%'
	},	
}
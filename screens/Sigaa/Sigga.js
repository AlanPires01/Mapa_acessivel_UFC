import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {logIN, acessarPaginaInicial, getNewSessionID} from './Sigaa-utils.js';
import PaginaInicial from './PaginaInicial.js';

let estilos = {
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


const getClasses = async (sessionID) =>{
	/* MENU DISCENTE */
	const response = await fetch("https://si3.ufc.br/sigaa/verPortalDiscente.do", {
		method:"get",
		headers:{
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Accept-Encoding": "gzip, deflate, br",
			"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
			"Cache-Control": "max-age=0",
			"Connection": "keep-alive",
			"Cookie": `JSESSIONID=${sessionID}`,
			"Host": "si3.ufc.br",
			"Origin": "https://si3.ufc.br"
		}
	})
	const text = await response.text();
	console.log(text)
	const classes = text.match(/<tbody.*?>.+?<\/tbody>/gs)[0];
	const cl = classes.match(/<tr .+?>.+?<\/tr>/gs);
	let disciplinas = [];
	for(let i = 0; i < cl.length; i++){
		let materia = criarMateria(cl[i]);
		materia.ordem = i;
		disciplinas.push(materia);
	}
	console.log(disciplinas);
	return disciplinas;
}





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
		setSessionID('');
		setLoginState(false);
		setUser('');
		setSenha('');
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
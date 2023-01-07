import React from 'react';
import {View, Text, TextInput, Button, Alert, useColorScheme} from 'react-native';
import {logIN, acessarPaginaInicial, getNewSessionID, GetHeaders} from './Sigaa-utils.js';
import PaginaInicial from './PaginaInicial.js';
import Vinculos from './Vinculos.js';
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function Sigga(){
	const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
	const [hidePass, sethidePass] = React.useState(true);
	const [user, setUser] = React.useState('');
	const [senha, setSenha] = React.useState('');
	const [sessionID, setSessionID] = React.useState('');
	const [loginState, setLoginState] = React.useState(false);
    const [maisDeUmVinculo, setMaisDeUmVinculo] = React.useState(false);
    const [vinculosData, setVinculosData] = React.useState({});

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
		if(resposta.state === false){
			Alert.alert("Erro de login!", "Usuário ou senhas incorretos!");
			return;
		}

        if(resposta.url.includes("vinculos")){
            setMaisDeUmVinculo(true);
            setVinculosData(resposta.data);
        }
        else{
            await acessarPaginaInicial(session);
        }

        setLoginState(true);
        setSessionID(session);
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
			<View style={theme.containerSigaa}>
				<Text accessible={false} style={theme.textSigaa}> SIGAA </Text>
				<View style={theme.inputContainerSigaa}>
					<TextInput style={theme.inputSigaa} onChangeText={(e)=>setUser(e)} placeholder={'Usuário'}/>
				</View>
				<View style={theme.inputContainerSenha}>
					<TextInput style={theme.inputSenha} onChangeText={(e)=>setSenha(e)} placeholder={'Senha'} secureTextEntry={hidePass}/>
					<TouchableOpacity style={theme.iconEye} onPress={() => sethidePass(!hidePass)}>
						{ hidePass ? <Ionicons name="eye-off" color="#858585" size={23.3}></Ionicons> : 
						<Ionicons name="eye" color="#858585" size={23.3}></Ionicons>}
					</TouchableOpacity>
				</View>	
				<View style={theme.inputContainerSigaa}>
					<Button accessibilityLabel="Clique para fazer login no SIGAA" title={"Entrar"} onPress={logar}/>
				</View>
			</View>
		) : (
            maisDeUmVinculo ? (
                <Vinculos sessionID={sessionID} data={vinculosData} handler={setMaisDeUmVinculo}/>
            ) : (
                <PaginaInicial sessionID={sessionID} handler={logOff}/>
            )
		
		)
	)
}

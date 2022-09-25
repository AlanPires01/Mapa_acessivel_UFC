import React from 'react';
import {View, Text, Button, FlatList, useColorScheme} from 'react-native';
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';
import {GradesExtract, GetHeaders} from './Sigaa-utils.js';

const estilo = {
	gradesContainer: {
		padding:10
	}
}

const getGrades = async (sessionID, payload) => {
	const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
		method: "post",
		headers:GetHeaders(sessionID),
		body: payload
	});
	const responseText = await response.text();
	return responseText;
}

const GradesExtractor = new GradesExtract;

export default function Notas({sessionID, disciplina, handler}){
	const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
	const [grades, setGrades] = React.useState([]);
	const [estado, setEstado] = React.useState("Procurando informações...")
	const [isMounted, setIsMounted] = React.useState(true);
	React.useEffect(()=>{
		setIsMounted(true);
		(async()=>{
			const text = await getGrades(sessionID, disciplina.payload);
			GradesExtractor.updateData(text);
			if(isMounted){
				setGrades(GradesExtractor.getData());
				if(grades.length === 0){
					setEstado("Informação não encontrada!");
				}
			}
			
		})();
		return ()=>{
			setIsMounted(false);
		};
	},[]);

	function renderItem({item}){
		return (
			<View style={theme.notasGrades}>
				<Text style={theme.labelTextS}>{item.titulo}</Text>
				<Text style={theme.textoCor}>{ (item?.conteudo) ? item?.conteudo : "NÃO FORNECIDA!"} </Text>
			</View>
		);
	}

	return (
		<View style={theme.gradesContainer}>
			<Button onPress={()=>{
							handler(true)
						}} title="Voltar"/>
			<Text style={theme.text4}>NOTAS{'\n'}</Text>
			<FlatList ListEmptyComponent={
				<><Text>{estado}</Text></>
			} data={grades} renderItem={renderItem} keyExtractor={item=>item.conteudo+item.titulo}/>
		</View>
	);
}
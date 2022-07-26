import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';

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
			<View style={{borderWidth:1, padding: 10}}>
				<Text style={{fontWeight: "bold"}}>{item.titulo}</Text>
				<Text>{ (item?.conteudo) ? item?.conteudo : "NÃO FORNECIDA!"} </Text>
			</View>
		);
	}

	return (
		<View style={estilo.gradesContainer}>
			<Button onPress={()=>{
							handler(true)
						}} title="Voltar"/>
			<Text style={{fontWeight: "bold", marginTop: 10}}>NOTAS{'\n'}</Text>
			<FlatList ListEmptyComponent={
				<><Text>{estado}</Text></>
			} data={grades} renderItem={renderItem} keyExtractor={item=>item.conteudo+item.titulo}/>
		</View>
	);
}
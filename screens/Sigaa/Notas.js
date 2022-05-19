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
	React.useEffect(()=>{
		(async()=>{
			const text = await getGrades(sessionID, disciplina.payload);
			GradesExtractor.updateData(text);
			setGrades([GradesExtractor.getData()]);
		})();

	},[]);

	function render({item, index}){
		return (
			<View>
				<Text>Unidade {index+1}:</Text>
				<Text>	AP{index+1}: {item.AP}</Text>
				<Text>	N: {item.N}</Text>
			</View>
		);
	}
	return (
		<View style={estilo.gradesContainer}>
			<Button onPress={()=>{
							handler(true)
						}} title="Voltar"/>
			<Text>Notas:</Text>
			<Text>Aluno: {grades?.[0]?.aluno ?? ''} - {grades?.[0]?.matricula ?? ''}</Text>
			<Text>Situação: {grades?.[0]?.situacao ?? ''}</Text>
			<FlatList data={grades?.[0]?.unidades} renderItem={render} keyExtractor={item=>item.index}/>
		</View>
	);
}
import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import {GradesExtract} from './Sigaa-utils.js';

const getGrades = async (sessionID, payload) => {
	const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
		method: "post",
		headers:{
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Accept-Encoding": "gzip, deflate, br",
			"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
			"Cache-Control": "max-age=0",
			"Connection": "keep-alive",
			"Content-Type": "application/x-www-form-urlencoded",
			"Cookie": `JSESSIONID=${sessionID}`,
			"Host": "si3.ufc.br",
			"Origin": "https://si3.ufc.br"
		},
		body: payload
	});
	const text = await response.text();
	return text;
}

export default function Notas({sessionID, disciplina, handler}){
	const [grades, setGrades] = React.useState([]);
	React.useEffect(()=>{
		(async()=>{
			const text = await getGrades(sessionID, disciplina.payload);
			let a = new GradesExtract;
			a.updateData(text);
			setGrades([a.getData()]);
			console.log(a.getData());
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
		<View>
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
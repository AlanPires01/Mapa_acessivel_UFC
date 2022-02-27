import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {FrequencyExtract} from './Sigaa-utils.js';


const estilo = {

}

const getFrequency = async (sessionID, payload) => {
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

export default function Frequencia({sessionID, disciplina, handler}){
	const [faltas, setFaltas] = React.useState([]);

	React.useEffect(()=>{
		(async()=>{
			const text = await getFrequency(sessionID, disciplina.payload);
			let a = new FrequencyExtract;
			a.updateData(text);
			setFaltas([a.getData()]);
		})();

	},[]);

	function render({item}){
		return(
			<View key={item.data}>
			<Text style={estilo.text}> <Text style={estilo.data}>{item.data}</Text> <Text style={estilo.situacao}>{item.situacao}</Text></Text>
			</View>
		)
	}
	return (
		<View>
			<FlatList
				ListHeaderComponent={
					<>
						<Button onPress={()=>{
							handler(true)
						}} title="Voltar"/>
						<Text>Frequencia:</Text>
						<Text>{faltas?.[0]?.infos?.turma && faltas[0].infos.turma}</Text>
					</>
				}

				ListEmptyComponent={
					<Text>Nenhuma informação encontrada</Text>
				}

				ListFooterComponent={
					<>
						<Text>{faltas?.[0]?.infos?.faltasTotais && `Faltas totais: ${faltas[0].infos.faltasTotais}`}</Text>
						<Text>{faltas?.[0]?.infos?.faltasMaximas && `Faltas máximas: ${faltas[0].infos.faltasMaximas}`}</Text>
					</>
				}

				renderItem={render} 
				data={(faltas?.[0]?.faltas) ?? []}
				keyExtractor={item=>item.data}
			/>
		</View>

	);
}

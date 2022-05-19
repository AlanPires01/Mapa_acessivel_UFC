import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {FrequencyExtract, GetHeaders} from './Sigaa-utils.js';


const estilo = {
	frequencyContainer:{
		padding:10
	}
}


const FrequencyExtractor = new FrequencyExtract;

const getFrequency = async (sessionID, payload) => {
	const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
		method: "post",
		headers: GetHeaders(sessionID),
		body: payload
	});
	const responseText = await response.text();
	return responseText;
}

export default function Frequencia({sessionID, disciplina, handler}){
	const [faltas, setFaltas] = React.useState([]);

	React.useEffect(()=>{
		(async()=>{
			const text = await getFrequency(sessionID, disciplina.payload);
			FrequencyExtractor.updateData(text);
			setFaltas([FrequencyExtractor.getData()]);
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
		<View style={estilo.frequencyContainer}>
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

import React from 'react';
import {View, Text, Button, FlatList, useColorScheme} from 'react-native';
import {FrequencyExtract, GetHeaders} from './Sigaa-utils.js';
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';


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
	const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
	const [faltas, setFaltas] = React.useState([]);
	const [isMounted, setIsMounted] = React.useState(true);

	React.useEffect(()=>{
		setIsMounted(true);
		(async()=>{
			const text = await getFrequency(sessionID, disciplina.payload);
			FrequencyExtractor.updateData(text);
			if(isMounted){
				setFaltas([FrequencyExtractor.getData()]);
			}
			
		})();
		return ()=>{
			setIsMounted(false);
		};

	},[]);
	function render({item}){
		return(
			<View key={item.data}>
			<Text style={theme.textF}> <Text style={theme.data}>{item.data}</Text> <Text style={theme.situacao}>{item.situacao}</Text></Text>
			</View>
		)
	}
	return (
		<View style={theme.frequencyContainer}>
			<FlatList
				ListHeaderComponent={
					<>
						<Button onPress={()=>{
							handler(true)
						}} title="Voltar"/>
						<Text style={theme.text4}>FREQUÊNCIA</Text>
						<Text style={theme.infoText}>{faltas?.[0]?.infos?.turma && faltas[0].infos.turma}</Text>
					</>
				}

				ListEmptyComponent={
					<Text style={theme.text5}>Nenhuma informação encontrada!</Text>
				}

				ListFooterComponent={
					<>
						<Text style={theme.infoText}>{faltas?.[0]?.infos?.faltasTotais && `Faltas totais: ${faltas[0].infos.faltasTotais}`}</Text>
						<Text style={theme.infoText}>{faltas?.[0]?.infos?.faltasMaximas && `Faltas máximas: ${faltas[0].infos.faltasMaximas}`}</Text>
					</>
				}

				renderItem={render} 
				data={(faltas?.[0]?.faltas) ?? []}
				keyExtractor={item=>item.data}
			/>
		</View>

	);
}

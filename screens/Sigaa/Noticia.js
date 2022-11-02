import React from "react";
import {Button, View, Text, ScrollView, TouchableOpacity, FlatList, useColorScheme} from "react-native";
import {NewsListExtract, NewsExtract, GetHeaders, convertDataToText} from "./Sigaa-utils.js";
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';

const NewsListExtractor = new NewsListExtract;
const NewsExtractor = new NewsExtract;

async function getNews(body, sessionID){
	const response = await fetch("https://si3.ufc.br/sigaa/ava/NoticiaTurma/listar.jsf", {
		method: "post",
		headers: GetHeaders(sessionID),
		body:body
	});
	const responseText = await response.text();
	return responseText;
}

async function getNewsList(body, sessionID){
	const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
		method: "post",
		headers:GetHeaders(sessionID),
		body: body
	});
	const responseText = await response.text();
	return responseText;
}

export default function Noticia({sessionID, handler, disciplina}){
	const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
	const [selectedNews, setSelectedNews] = React.useState([]);
	const [not, setNot] = React.useState([]);
	const [showingNews, setShowingNews] = React.useState(true);
	const [newsState, setNewsState] = React.useState("Procurando notícias...");
	const [isMounted, setIsMounted] = React.useState(true);

	React.useEffect(()=>{
		setIsMounted(true);
		(async()=>{
			const responseText = await getNewsList(disciplina.payload, sessionID);
			NewsListExtractor.updateData(responseText);
			const Noticias = NewsListExtractor.getData();
			if(isMounted){
				setNot(Noticias);
				if(Noticias.length === 0) setNewsState("Nenhuma notícia encontrada nesta disciplina!");
				else setNewsState("Notícias encontrada!");
			}
		})();
		return ()=>{
			setIsMounted(false)
		};
	}, []);

	function renderNot({item}){
		return (
			<TouchableOpacity
				style={theme.buttonS} 
				onPress={async ()=>{
					setSelectedNews([]);
					setShowingNews(false);
					const responseText = await getNews(item.payload, sessionID);
					NewsExtractor.updateData(responseText);
					setSelectedNews([NewsExtractor.getData()]);					
				}} 
				key={item.payload + item.data + item.titulo}
				accessible={true}
				accessibilityLabel={`${item.titulo} ${convertDataToText(item.data)}`}
				accessibilityHint={"Selecionar para ver a noticia"}
			>
				<Text>{item.titulo}</Text>
				<Text style={{alignSelf:"flex-end", color:"grey"}}>{item.data}</Text>
			</TouchableOpacity>
		);
	}

	return (
			showingNews ? (
				<View style={theme.newsListContainerS}>
					<Button title='Voltar' onPress={()=>{handler(true)}}/>
					<Text style={theme.textTitleS}>Notícias:</Text>
					<FlatList 
						ListEmptyComponent={
							<>
								<Text style={theme.textMap}>{newsState}</Text>
							</>
						}
						renderItem={renderNot} 
						data={not}/>
				</View>
			) : (
				<News handler={setShowingNews} handlerSelectedNews={setSelectedNews} data={selectedNews}/>
			)
	);
}

function News({handler, handlerSelectedNews, data}){
	const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
	React.useEffect(()=>{
		return ()=>{
			handlerSelectedNews([]);
		};
	}, [])
	return (
		<ScrollView	 style={theme.containerS}>
			<Button onPress={()=>{handler(true)}} title="Voltar"/>
			<Text style={theme.textS}><Text style={theme.labelTextS}>TITULO: </Text>{(data?.[0]?.titulo) ?? '...'}</Text>
			<Text style={theme.textS}><Text style={theme.labelTextS}>DATA: </Text>{(data?.[0]?.data) ?? '...'}</Text>
			<Text style={theme.textS}><Text style={theme.labelTextS}>TEXTO: </Text>{(data?.[0]?.texto) ?? '...'}</Text>
		</ScrollView>

	)
}

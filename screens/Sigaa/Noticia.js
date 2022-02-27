import React from "react";
import {Button, View, Text, ScrollView, TouchableOpacity} from "react-native";
import {NewsListExtract, NewsExtract} from "./Sigaa-utils.js";

const estilo = {
	labelText:{
		fontWeight:'bold',
	},
	text:{
		marginTop: 2,
		marginBottom: 10,
		fontFamily: 'monospace'
	},
	container:{
		padding:10,
		paddingBottom: 50
	},
	button:{
		paddingVertical:10,
		marginVertical: 2,
		paddingLeft: 4,
		backgroundColor: '#ffe'
	},
	newsListContainer:{
		paddingBottom: 70
	},
	textTitle:{
		fontSize:20,
		fontWeight:'bold',
		lineHeight: 40
	}
}

export default function Noticia({sessionID, handler, disciplina}){
	const [news, setNews] = React.useState([]);
	const [selectedNews, setSelectedNews] = React.useState([]);
	const [showingNews, setShowingNews] = React.useState(true);

	React.useEffect(()=>{

		(async()=>{
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
				body: disciplina.payload
			});
			const text = await response.text();
			let nle = new NewsListExtract;
			nle.updateData(text);

			
			const a = nle.getData().map(e=>{
				return (
					<TouchableOpacity style={estilo.button} onPress={async ()=>{
						setShowingNews(false);
						await getNews(e.payload);
					}} key={e.payload}>
						<Text>{e.titulo} - {e.data}</Text>
					</TouchableOpacity>
				);
			});
			
			setNews(a);
		})();
			
	}, []);

	async function getNews(payload){
		const response = await fetch("https://si3.ufc.br/sigaa/ava/NoticiaTurma/listar.jsf", {
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
			body:payload
		});
		const text = await response.text();
		let a = new NewsExtract;
		a.updateData(text);
		setSelectedNews([a.getData()]);
	}

	return (
			showingNews ? (
				<View style={estilo.newsListContainer}>
					<Button title='Voltar' onPress={()=>{handler(true)}}/>
					<Text style={estilo.textTitle}>Notícias:</Text>
					<ScrollView>
						{news}
					</ScrollView>
				</View>
			) : (
				<News handler={setShowingNews} data={selectedNews}/>
			)
	);
}

function News({handler, data}){
	return (
		<ScrollView	 style={estilo.container}>
			<Button onPress={()=>{handler(true)}} title="Voltar"/>
			<Text style={estilo.text}><Text style={estilo.labelText}>Titulo: </Text>{(data?.[0]?.titulo) ?? ''}</Text>
			<Text style={estilo.text}><Text style={estilo.labelText}>Data: </Text>{(data?.[0]?.data) ?? ''}</Text>
			<Text style={estilo.text}><Text style={estilo.labelText}>Texto: </Text>{(data?.[0]?.texto) ?? ''}</Text>
		</ScrollView>

	)
}
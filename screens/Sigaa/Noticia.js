import React from "react";
import {Button, View, Text, ScrollView, TouchableOpacity} from "react-native";
import {NewsListExtract, NewsExtract, GetHeaders, convertDataToText} from "./Sigaa-utils.js";

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
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#ffe',
		borderWidth: 1,
		borderColor: '#aaa'
	},
	newsListContainer:{
		paddingBottom: 90,
		padding: 10
	},
	textTitle:{
		fontSize:20,
		fontWeight:'bold',
		lineHeight: 40
	}
}

const NewsListExtractor = new NewsListExtract;
const NewsExtractor = new NewsExtract;

export default function Noticia({sessionID, handler, disciplina}){
	const [newsListComponents, setNews] = React.useState([]);
	const [selectedNews, setSelectedNews] = React.useState([]);
	const [showingNews, setShowingNews] = React.useState(true);

	React.useEffect(()=>{

		(async()=>{
			const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
				method: "post",
				headers:GetHeaders(sessionID),
				body: disciplina.payload
			});
			const responseText = await response.text();
			
			NewsListExtractor.updateData(responseText);


			const Noticias = NewsListExtractor.getData();
			const NoticiasComponents = Noticias.map(e=>{
				if(e.data === "" || e.titulo === "") return
				return (
					<TouchableOpacity 
						style={estilo.button} 
						onPress={async ()=>{
							setShowingNews(false);
							await getNews(e.payload);
						}} 
						key={e.payload + e.data + e.titulo}
						accessible={true}
						accessibilityLabel={`${e.titulo} ${convertDataToText(e.data)}`}
						accessibilityHint={"Selecionar para ver a noticia"}
					>
						<Text>{e.titulo}</Text>
						<Text style={{alignSelf:"flex-end", color:"grey"}}>{e.data}</Text>
					</TouchableOpacity>
				);
			});
			
			setNews(NoticiasComponents);

		})();
			
	}, []);

	async function getNews(payload){
		const response = await fetch("https://si3.ufc.br/sigaa/ava/NoticiaTurma/listar.jsf", {
			method: "post",
			headers: GetHeaders(sessionID),
			body:payload
		});
		const responseText = await response.text();
		
		NewsExtractor.updateData(responseText);
		setSelectedNews([NewsExtractor.getData()]);
	}

	return (
			showingNews ? (
				<View style={estilo.newsListContainer}>
					<Button title='Voltar' onPress={()=>{handler(true)}}/>
					<Text style={estilo.textTitle}>Notícias:</Text>
					<ScrollView>
						{newsListComponents}
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
			<Text style={estilo.text}><Text style={estilo.labelText}>TITULO: </Text>{(data?.[0]?.titulo) ?? ''}</Text>
			<Text style={estilo.text}><Text style={estilo.labelText}>DATA: </Text>{(data?.[0]?.data) ?? ''}</Text>
			<Text style={estilo.text}><Text style={estilo.labelText}>TEXTO: </Text>{(data?.[0]?.texto) ?? ''}</Text>
		</ScrollView>

	)
}


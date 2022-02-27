import React from "react";
import {View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import {PrincipalExtract} from "./Sigaa-utils.js";
import Noticia from './Noticia.js';
import Frequencia from './Frequencia.js';
import Notas from './Notas.js';

const estilo = {
	menuButton:{
		paddingVertical:15,
		fontSize: 45,
		fontWeight: 'bold',
		backgroundColor: 'gray',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		marginBottom:10,

	},
	menuText:{
		color:'white',
	},
	textTitle:{
		fontSize:15,
		lineHeight:45,
	},
	menuContainer:{
		
	}
}

export default function Menu({handler, data, sessionID}){
	
	const [menuData, setMenuData] = React.useState([]); 
	const [selectedOption, setSelectedOption] = React.useState([]);
	const [option, setOption] = React.useState(true);

	React.useEffect(()=>{
		(async()=>{
			
			const response = await fetch("https://si3.ufc.br/sigaa/portais/discente/turmas.jsf", {
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
				body: data[0].payload
			});
			const text = await response.text();
			let pe = new PrincipalExtract;
			pe.updateData(text);

			let menu = pe.getData().filter(e=>{
				return e.menu === "Notícias" || e.menu === "Frequência" || e.menu === "Ver Notas";
			});
			setMenuData(menu);
		})();

	},[]);

	function renderItem({item}){
		return (
				<TouchableOpacity 
					onPress={()=>{
						setSelectedOption([item])
						setOption(false);
					}}
					>

					<View style={estilo.menuButton}>
						<Text style={estilo.menuText}>{item.menu}</Text>
					</View>
				</TouchableOpacity>
		);
	}

	function selectComponent(sessionID, disciplina, handler){
		if(disciplina.menu === "Frequência"){
			return <Frequencia sessionID={sessionID} disciplina={disciplina} handler={handler}/>
		}
		if(disciplina.menu === "Notícias"){
			return <Noticia sessionID={sessionID} disciplina={disciplina} handler={handler}/>
		}
		if(disciplina.menu === "Ver Notas"){
			return <Notas sessionID={sessionID} disciplina={disciplina} handler={handler}/>
		}
		return <View><Button title="Voltar" onPress={()=>{setOption(true)}}/></View>
	}

	return (
		  option ? (
			<View>
				<Button title="Voltar" onPress={()=>{handler(false)}}/>
				<Text style={estilo.textTitle}>{data?.[0].codigo} {data?.[0].disciplina}</Text>
				<View style={estilo.menuContainer}>
					<FlatList data={menuData} renderItem={renderItem} keyExtractor={e=>e.menu}/>
				</View>
			</View>	
		) : (
			selectComponent(sessionID, selectedOption[0], setOption)
		)
	);
}
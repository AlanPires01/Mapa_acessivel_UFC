import React from "react";
import {View, Text, Button, FlatList, TouchableOpacity, Linking, useColorScheme} from "react-native";
import {PrincipalExtract, GetHeaders} from "./Sigaa-utils.js";
import Noticia from './Noticia.js';
import Frequencia from './Frequencia.js';
import Notas from './Notas.js';
import Tarefas from "./Tarefas.js";
import Participantes from "./Participantes.js";
import Arquivos from "./Arquivos.js";
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';

const PrincipalExtractor = new PrincipalExtract;

export default function Menu({handler, data, sessionID}){
	const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
	const [menuData, setMenuData] = React.useState([]); 
	const [selectedOption, setSelectedOption] = React.useState([]);
	const [option, setOption] = React.useState(true);
	const [mounted, setMounted] = React.useState(true);
	
	React.useEffect(()=>{
		setMounted(true);
		
		(async()=>{
			const response = await fetch("https://si3.ufc.br/sigaa/portais/discente/turmas.jsf", {
				method: "post",
				headers: GetHeaders(sessionID),
				body: data[0].payload
			});
			const responseText = await response.text();
			PrincipalExtractor.updateData(responseText);
			let menuList = PrincipalExtractor.getData().links.filter(e=>{
				return e.menu === "Notícias" || e.menu === "Frequência" || e.menu === "Ver Notas" || e.menu === "Tarefas" || e.menu === "Participantes";
			});
			menuList.push({
				menu: "Arquivos Enviados",
				payload: "",
				arquivos: PrincipalExtractor.getData().arquivos
			});
			if(mounted){
				setMenuData(menuList);
			}
			
		})();

		return ()=>{
			setMounted(false);
		};
	},[]);

	function renderItem({item}){
		return (
				<TouchableOpacity 
					onPress={()=>{
						setSelectedOption([item])
						setOption(false);
					}}
					accessible={true}
					accessibilityRole="button"
				>

					<View style={theme.menuButton}>
						<Text style={theme.menuText}>{item.menu}</Text>
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
		if(disciplina.menu === "Tarefas"){
			return <Tarefas sessionID={sessionID} disciplina={disciplina} handler={handler}/>
		}
		if(disciplina.menu === "Participantes"){
			return <Participantes sessionID={sessionID} disciplina={disciplina} handler={handler}/>
		}
		if(disciplina.menu === "Arquivos Enviados"){
			return <Arquivos sessionID={sessionID} data={disciplina.arquivos} handler={handler}/>
		}

		return <View><Button title="Voltar" onPress={()=>{setOption(true)}}/></View>
	}

	return (
		  option ? (
			<View style={theme.menuContainer}>
				<Button title="Voltar" onPress={()=>{handler(false)}}/>
				<Text style={theme.menuTextTitle}>{data?.[0].disciplina}</Text>
				<View>
					<FlatList 
						ListEmptyComponent={
							<Text style={theme.textMap}>Carregando menu...</Text>
						} 
						data={menuData} 
						renderItem={renderItem} 
						keyExtractor={e=>e.menu}
					/>
				</View>
			</View>	
		) : (
			selectComponent(sessionID, selectedOption[0], setOption)
		)
	);
}
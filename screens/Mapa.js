import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView, useColorScheme} from 'react-native';
import { WebView } from 'react-native-webview';
import BarraDeBusca from './BarraDeBusca';
import { Icon } from 'react-native-elements';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

//uri: 'https://openlevelup.net/?l=0#'+local.zoom+'/'+local.lon+'/'+local.lat
//uri: 'https://indoorequal.org/#map=18.98/-3.6937839/-40.3541773/27/15&level=0'


function DescricaoComponent({menuHandler, isOpen, lugares}){
	const deviceTheme = useColorScheme();
  	var theme = light;
  	if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
	function renderItem({item}){
		return (
			<Text style={theme.linksText}>{item.nome}</Text>
		);
	}
	let locaisProximosButtonString = `${isOpen?"Selecionado":"Não selecionado"} lugares proximos, aqui embaixo será exibido uma lista dos lugares proximos.`;

	return (
		<View  style={theme.descricoesContainer}>
			<View style={theme.descricoesHeader}>
				<TouchableOpacity accessibilityRole='button' accessibilityLabel={locaisProximosButtonString} onPress={()=>menuHandler()}><Text style={theme.textMap}>Locais Próximos {isOpen?"-":"+"}</Text></TouchableOpacity>
			</View>
			{isOpen ? 
			<View style={theme.descricoesContent}>
				<FlatList data={lugares} renderItem={renderItem} ListEmptyComponent={()=>{ return(<Text style={theme.linksText}>Nenhum lugar próximo!</Text>)}}/>
			</View> : null}
		</View>
	);
}


export default function Mapa({ navigation }) {
	const deviceTheme = useColorScheme();
  	var theme = light;
	var opac = 1;
  	if(deviceTheme == "dark"){theme = dark; opac=0.8;}else {theme = light; opac=1;}
	return (
	<View style={{ flex: 1 }}>
        <WebView 
            source={{ uri: "https://lincolngondin.github.io/mapaUFC/" }}
        />
	</View>
	);
}

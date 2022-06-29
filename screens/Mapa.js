import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import BarraDeBusca from './BarraDeBusca';
import { Icon } from 'react-native-elements';

//uri: 'https://openlevelup.net/?l=0#'+local.zoom+'/'+local.lon+'/'+local.lat
//uri: 'https://indoorequal.org/#map=18.98/-3.6937839/-40.3541773/27/15&level=0'

const estilos = {
	mapaButton: {
		width: "50%",
		flex:1,
		alignItems: "center",
		paddingVertical: 4,
		backgroundColor: "white"
	},
	selecionado: {
		color: "#3686ff",
		backgroundColor: "#eee"
	},
	mapButtonText: {
		fontSize: 10,
		color: "gray"
	}
}

export default function Mapa({ navigation }) {
	//codigo javascript para apagar a barra de pesquisa do site
	const javascriptCode = `
		document.querySelector('.indoor-toolbar').style.display='none';
		document.querySelector(".maplibregl-ctrl-attrib-inner.mapboxgl-ctrl-attrib-inner").style.display = "none"
	`

	const [local, setLocal] = useState({lon:'-3.693466', lat:'-40.354933', zoom:'17.97'});
	const [regiao, setRegiao] = useState(0);
	
	const handleLocal = (v)=>{
		setLocal(v);
	}

	return (
	<View style={{ flex: 1 }}>
		<View accessible={true} accessibilityLabel="Barra de busca" style={{flex:1}}>
			<BarraDeBusca handleLocal={handleLocal}/>
			<WebView 
				source={{ uri: 'https://indoorequal.org/#map='+local.zoom+'/'+local.lon+'/'+local.lat+'/27/15&level=0' }}
				javaScriptEnabledAndroid={true}
				injectedJavaScript={javascriptCode}
			/>
		</View>
		
		<View style={{flexDirection: "row"}}>
			<TouchableOpacity accessibilityState={{selected: regiao === 0}} onPress={()=>{
				setRegiao(0);
				setLocal({lon:'-3.693466', lat:'-40.354933', zoom:'17.97'});
			}} style={[estilos.mapaButton, regiao === 0 ? estilos.selecionado : null]}>
				<Icon name="map" type='font-awesome-5'/>
				<Text style={[estilos.mapButtonText, regiao === 0 ? estilos.selecionado : null]}>Mucabinho</Text>
			</TouchableOpacity>
			<TouchableOpacity accessibilityState={{selected: regiao === 1}} onPress={()=>{
				setRegiao(1);
				setLocal({lon:'-3.68137', lat:'-40.336832', zoom:'18.29'});
			}} style={[estilos.mapaButton, regiao === 1 ? estilos.selecionado : null]}>
				<Icon name="map-marked-alt" type='font-awesome-5'/>
				<Text style={[estilos.mapButtonText, regiao === 1 ? estilos.selecionado : null]}>Famed</Text>
			</TouchableOpacity>
		</View>
		
	</View>
	);
}
//source={{ uri: 'https://openlevelup.net/?l=0#20/-3.69364/-40.35440' }}


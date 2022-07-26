import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
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
	},
	descricoesContainer: {
		width: "40%",
		backgroundColor: "#fff",
		right: 0,
		top: 50,
		margin: 2,
		borderRadius: 4,
		borderWidth: 1,
		position: "absolute",
		zIndex: 100
	},
	descricoesHeader: {
		backgroundColor: "#ddd",
		padding: 4
	},
	descricoesContent: {
		padding: 10,
		paddingBottom: 10,
		maxHeight: 400
	}
}

const locais = require('.././assets/data/locais.json');

function calcDistance(actualURL, local, MAX_DISTANCE){
	let position = actualURL.split("/");
	let zoom = (1/22) * (parseFloat(position[3].split("=")[1]));
	let longitude = parseFloat(position[4] - local.lon);
	let latitude = parseFloat(position[5] - local.lat);
	
	let distance = Math.sqrt(longitude*longitude + latitude*latitude);
	let raio = 0.00002 + ( (1-zoom)/170);
	return distance < raio;
}

const RAIO_DISTANCIA = 0.0002;


function DescricaoComponent({menuHandler, isOpen, lugares}){
	
	function renderItem({item}){
		return (
			<Text>{item.nome}</Text>
		);
	}
	let locaisProximosButtonString = `${isOpen?"Selecionado":"Não selecionado"} lugares proximos, aqui embaixo será exibido uma lista dos lugares proximos.`;

	return (
		<View  style={estilos.descricoesContainer}>
			<View style={estilos.descricoesHeader}>
				<TouchableOpacity accessibilityRole='button' accessibilityLabel={locaisProximosButtonString} onPress={()=>menuHandler()}><Text style={{textAlign:"center"}}>Locais Próximos {isOpen?"-":"+"}</Text></TouchableOpacity>
			</View>
			{isOpen ? 
			<View style={estilos.descricoesContent}>
				<FlatList data={lugares} renderItem={renderItem} ListEmptyComponent={()=>{ return(<Text>Nenhum lugar próximo!</Text>)}}/>
			</View> : null}
		</View>
	);
}


export default function Mapa({ navigation }) {
	//codigo javascript para apagar a barra de pesquisa do site
	const javascriptCode = `
		document.querySelector('.indoor-toolbar').style.display='none';
		document.querySelector(".maplibregl-ctrl-attrib-inner.mapboxgl-ctrl-attrib-inner").style.display = "none"
		document.querySelector(".mapboxgl-ctrl-heatmap.mapboxgl-ctrl-group").style.display = 'none';
		document.querySelector(".maplibregl-ctrl-geolocate.mapboxgl-ctrl-geolocate").style.display = 'none';
		document.querySelector(".maplibregl-ctrl.maplibregl-ctrl-group.mapboxgl-ctrl.mapboxgl-ctrl-group").style.display = 'none';
	`

	const [local, setLocal] = useState({lon:'-3.693466', lat:'-40.354933', zoom:'17.97'});
	const [regiao, setRegiao] = useState(0);
	const [lugaresProximos, setLugaresProximos] = useState([]);
	const [actualURL, setActualURL] = useState("");
	const [openInfo, setOpenInfo] = useState(false);

	const webV = useRef(null);
	const handleLocal = (v)=>{
		setLocal(v);
	}
	
	function moveWebView(pp){
		

		console.log(pp);
	}

	return (
	<View style={{ flex: 1 }}>
		<View accessible={true} accessibilityLabel="Barra de busca" style={{flex:1}}>
			<BarraDeBusca handleLocal={handleLocal}/>
			<DescricaoComponent 
				menuHandler={()=>{setOpenInfo(!openInfo);}}
				isOpen={openInfo}
				lugares={lugaresProximos}	
			/>
			<WebView 
				ref={webV}
				onTouchStart={moveWebView}
				onNavigationStateChange={(webviewState)=>{
					if(openInfo){
						let tempArr = [];
						for(let i = 0; i < locais.length; i++){
							let lo = locais[i];
							let isNear = calcDistance(webviewState.url, lo.coords, RAIO_DISTANCIA);
							if(isNear){
								tempArr.push(lo);
							}
						}
						setLugaresProximos(tempArr);
					}
					setActualURL(webviewState.url);
	
				}}
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

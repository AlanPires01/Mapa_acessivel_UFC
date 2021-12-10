import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { WebView } from 'react-native-webview';
import BarraDeBusca from './BarraDeBusca';


//uri: 'https://openlevelup.net/?l=0#'+local.zoom+'/'+local.lon+'/'+local.lat
//uri: 'https://indoorequal.org/#map=18.98/-3.6937839/-40.3541773/27/15&level=0'

export default function Mapa({ navigation }) {
	//codigo javascript para apagar a barra de pesquisa do site
	const javascriptCode = `
		document.querySelector('.indoor-toolbar').style.display='none';
	`

	const [local, setLocal] = useState({lon:'-3.69323', lat:'-40.35440', zoom:'21'});
	
	
	const handleLocal = (v)=>{
		setLocal(v);
	}

	return (
	<View style={{ flex: 1 }}>
		<BarraDeBusca handleLocal={handleLocal}/>
		<WebView 
			source={{ uri: 'https://indoorequal.org/#map='+local.zoom+'/'+local.lon+'/'+local.lat+'/27/15&level=0' }}
			javaScriptEnabledAndroid={true}
			injectedJavaScript={javascriptCode}
		/>
	</View>
	);
}
//source={{ uri: 'https://openlevelup.net/?l=0#20/-3.69364/-40.35440' }}


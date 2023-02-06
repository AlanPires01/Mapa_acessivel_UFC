import {View, useColorScheme} from 'react-native';
import { WebView } from 'react-native-webview';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';


export default function Mapa() {
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

import React from 'react';
import {View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Mapa({ navigation }) {

	return (
	<View style={{ flex: 1 }}>
			<WebView 
				source={{ uri: 'https://openlevelup.net/?l=0#21/-3.69323/-40.35440' }}
				javaScriptEnabledAndroid={true}
			/>
	</View>
	);
}


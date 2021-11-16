import React from 'react';
import {View, Text} from 'react-native';
import mapa_script from './mapa_script';
import {WebView} from 'react-native-webview';


export default function Mapa({ navigation }) {
  return (
    <View style={{ flex: 1, width:'100%',height:'100%' }}>
		  <WebView source={{html: mapa_script}} style={{ flex: 2 }} />  
	  </View>
  );
}


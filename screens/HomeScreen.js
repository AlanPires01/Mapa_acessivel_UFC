import React from 'react';
import {View, Text} from 'react-native';
import {WebViewLeaflet, MapShapeType} from "react-native-webview-leaflet";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
		
		<WebViewLeaflet 
			onMessageReceived={(msg)=>{console.log(msg);}}
			 mapLayers={[
              {
                attribution:
                  '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                baseLayerIsChecked: true,
                baseLayerName: "OpenStreetMap.Mapnik",
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			 }
			 
			 
			 ]}
			 mapCenterPosition={{lat: -3.693375,lng: -40.354864}}
			 zoom={17}
			 maxZoom={20}
			 mapShapes={[
              
               {
                shapeType: MapShapeType.POLYGON ,
                color: "red",
                id: "2",
                positions: [{lat: -3.693130, lng: -40.354863}, 
                  {lat: -3.693013, lng: -40.354035}, 
                  {lat: -3.693420, lng: -40.353998}, 
                  {lat: -3.693504, lng: -40.354805}
                  ]
              },
              {
                shapeType: MapShapeType.POLYGON ,
                color: "blue",
                id: "3",
                positions: [{lat: -3.693776, lng: -40.354771}, 
                  {lat: -3.693788, lng: -40.354250}, 
                  {lat: -3.694288, lng: -40.354238}, 
                  {lat: -3.694293, lng: -40.354701}
                  ]
              } 
			 ]}
      
		/>
		
	</View>
  );
}


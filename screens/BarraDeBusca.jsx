import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
const locais = require('.././assets/data/locais.json');

export default function BarraDeBusca(props){
	const [busca, setBusca] = useState('');

	function renderItem({item}){
		return (
			item.nome.toLowerCase().includes(busca.toLowerCase()) && (
				<TouchableOpacity onPress={()=>{
					props.handleLocal(item.coords);
					setBusca('');
				}} style={estilo.searchbar__button}>
					<Text style={estilo.searchbar__text}>{item.nome}</Text>
				</TouchableOpacity>
			)
		);
	}


	return(
		<View>
			<SearchBar 
				containerStyle={{padding:0}}
				searchIcon={{color:'white'}}
				color={'white'}
				inputContainerStyle={{backgroundColor:'#016EA4'}}
				style={estilo.searchbar}
				lightTheme={true}
				value={busca} 
				onSubmitEditing={()=>{
					for(let lugares = 0; lugares < locais.length; lugares++){
						if(locais[lugares].nome.toLowerCase().includes(busca.toLowerCase())){
							props.handleLocal(locais[lugares].coords);
							break;
						}
					}
					setBusca('');
				}} 
				onChangeText={(text)=>{
					setBusca(text)
				}} 
			/>
			{!!busca && (
				<FlatList style={estilo.lista__container} data={locais} renderItem={renderItem} keyExtractor={(item)=>item.id}/>
			)}
		</View>
	);
}

const estilo = StyleSheet.create({
	lista__container:{
		backgroundColor:'#016EA4',
		position: 'absolute',
		width:'95%',
		alignSelf: 'center',
		top: 50,
		zIndex: 3
	},
	searchbar:{
		position: 'relative',
	},
	searchbar__button:{
		flex:1,
		justifyContent:'center',
		alignItems:'flex-start',
		padding:20,
	},
	searchbar__text:{
		color:'white',
		fontSize:18,
		fontWeight: 'bold' 
	}
});

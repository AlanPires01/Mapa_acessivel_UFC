import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';

const testedata = [
	{
		nome:"Restaurante Universitário",
		coords:{lon:'-3.69323', lat:'-40.35440', zoom:'21'},
		id:"a"
	},
	{
		nome:"Ponto de Onibus",
		coords:{lon:'-3.69364', lat:'-40.35565', zoom:'21'},
		id:"b"
	},
	{
		nome:"Biblioteca",
		coords:{lon:'-3.69398', lat:'-40.35429', zoom:'20'},
		id:"c"
	},
	{
		nome:"Auditorio",
		coords:{lon:'-3.6931576', lat:'-40.3540371', zoom:'20.48'},
		id:"d"
	},
	{
		nome:"Secretaria da Engenharia da Computação",
		coords:{lon:'-3.69313943', lat:'-40.354787', zoom:'21.79'},
		id:"e"
	},
	{
		nome:"Secretaria da Engenharia Eletrica",
		coords:{lon:'-3.6931199', lat:'-40.3547678', zoom:'22'},
		id:"f"
	},
	{
		nome:"Banheiros",
		coords:{lon:'-3.6932016', lat:'-40.35481791', zoom:'22'},
		id:"g"
	}
]

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
					for(let lugares = 0; lugares < testedata.length; lugares++){
						if(testedata[lugares].nome.toLowerCase().includes(busca.toLowerCase())){
							props.handleLocal(testedata[lugares].coords);
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
				<FlatList style={estilo.lista__container} data={testedata} renderItem={renderItem} keyExtractor={(item)=>item.id}/>
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

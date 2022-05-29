import React from 'react';
import {View, Text, TouchableOpacity, Button, FlatList} from 'react-native';
import {OldClassesExtract, GetHeaders} from './Sigaa-utils.js';
import Menu from './MenuClass.js';



const getAllClasses = async (sessionID)=>{
	const response = await fetch("https://si3.ufc.br/sigaa/portais/discente/turmas.jsf", {
		method:"get",
		headers:GetHeaders(sessionID)
	})
	const text = await response.text();
	return text;
}

const ClassExtractor = new OldClassesExtract;

export default function PaginaInicial({sessionID, handler}){
	const [semestresEncontrados, setSemestresEncontrados] = React.useState([]);
	const [semestreSelecionado, setSemestreSelecionado] = React.useState("");
	const [semestresData, setSemestresData] = React.useState([]);
	const [menuOpened, setMenuOpened] = React.useState(false);
	const [dataMenu, setDataMenu] = React.useState([]);

	React.useEffect(()=>{
		(async()=>{
			const disciplinas = await getAllClasses(sessionID);
			ClassExtractor.updateData(disciplinas);
			let extractedClasses = ClassExtractor.getData();
			let semestres = Object.keys(extractedClasses);
			if(semestres.length !== 0){
				setSemestreSelecionado(semestres[0]);
			}
			setSemestresEncontrados(semestres);
			setSemestresData(extractedClasses);
		})();
	},[]) 

	function renderButtonSemestres({item}){

		return (
			<View style={[estilos.semestreButton, item === semestreSelecionado?estilos.semestreButtonSelecionado: null]}>
				<TouchableOpacity onPress={()=>{
					setSemestreSelecionado(item);
				}}>
					<Text>{item}</Text>
				</TouchableOpacity>
			</View>
		);
	}

	function renderSemestre({item, indice}){

		return (
			<View>
				<TouchableOpacity 
					onPress={()=>{
						setMenuOpened(true);
						setDataMenu([item]);
					} }
					style={[indice%2==0?estilos.odd:estilos.even, estilos.turmasButton]}
					accessible={true}
					accessibilityLabel={`${item.disciplina} no semestre ${semestreSelecionado}`}
				>

					<Text style={estilos.turmasButtonText}>
						{item.disciplina} - {item.codigo} ({item.turma})
					</Text>
				</TouchableOpacity>
			</View>

		);
	}

	return (
		!menuOpened ? (
			<View style={estilos.paginaInicialContainer}>
				
				<View style={estilos.logOffButtonContainer} >
					<Button accessibilityLabel="Clique aqui para sair da sua conta do SIGAA" title="SAIR" color="#016EA4" onPress={()=>{handler()}}/>
				</View>
				

				<View style={estilos.turmasOptions}>
					
					<View style={estilos.semestreButtonContainer}>
						<FlatList horizontal={true} data={semestresEncontrados} renderItem={renderButtonSemestres} keyExtractor={(item)=>{return item}}/>
					</View>
					<View>
						{semestreSelecionado !== "" ? <FlatList data={semestresData[semestreSelecionado]} renderItem={renderSemestre} keyExtractor={(item)=>{
							return item.disciplina;
						}}/> : null}
					</View>
					
				</View>

				
			</View>
		) : (
			<Menu handler={setMenuOpened} data={dataMenu} sessionID={sessionID}/>
		)
	);
}

const estilos = {
	odd:{
		backgroundColor:'#c7c7c7',
	},
	even:{
		backgroundColor:'#e6e3e3',
	},
	turmasOptions:{
	},
	paginaInicialContainer:{
		flex: 1,
		position:'relative',
		padding:10,
	},
	turmasButtonText:{
		fontSize:15,
	},
	turmasButton:{
		padding:10,
		paddingVertical:30,
		margin:4
	},
	logOffButtonContainer:{
		position:'absolute',
		right: 0,
		width:'20%',
		zIndex:10
	},
	semestreButton:{
		padding: 4,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor:"white",
		borderWidth: 1,
		borderRadius: 10
	},
	semestreButtonSelecionado: {
		backgroundColor: "#ccc"
	},
	semestreButtonContainer: {
		width:"70%",
		padding: 10
	}
	
};
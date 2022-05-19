import React from 'react';
import {View, Text, TouchableOpacity, Button, FlatList} from 'react-native';
import {OldClassesExtract, GetHeaders} from './Sigaa-utils.js';
import Menu from './MenuClass.js';

let estilos = {
	odd:{
		backgroundColor:'#c7c7c7',
	},
	even:{
		backgroundColor:'#e6e3e3',
	},
	turmasOptions:{
	},
	paginaInicialContainer:{
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
	semestre:{
		marginBottom:20
	},
	
};

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
	const [renderedTurmas, setRenderedTurmas] = React.useState([]);
	const [menuOpened, setMenuOpened] = React.useState(false);
	const [dataMenu, setDataMenu] = React.useState([]);

	React.useEffect(()=>{
		(async()=>{
			const text = await getAllClasses(sessionID);
			
			ClassExtractor.updateData(text);
			
			let extractedClasses = ClassExtractor.getData();
			let semestres = Object.keys(extractedClasses);

			const a = semestres.map((semestre, index)=>{

				let components = extractedClasses[semestre].map((classeAtual,indice)=>{
					return (
						<TouchableOpacity 
							key={classeAtual.codigo + semestre}
							onPress={()=>{
								setMenuOpened(true);
								setDataMenu([classeAtual]);}
							} 
							style={[indice%2==0?estilos.odd:estilos.even, estilos.turmasButton]}
							accessible={true}
							accessibilityLabel={`${classeAtual.disciplina} no semestre ${semestre}`}
							>

							<Text style={estilos.turmasButtonText}>
								{classeAtual.disciplina} - {classeAtual.codigo} ({classeAtual.turma})
							</Text>
						</TouchableOpacity>
						);
				});

				return (
					<View key={index + semestre}>
						<Text style={{fontSize:20}}>SEMESTRE {semestre}</Text>
						<View>{components}</View>
					</View>
				);
			})

			setRenderedTurmas(a);

		})();
	},[]) 


	function renderItemFunction({item, index}){
		return (
			<View style={estilos.semestre}>
				{item}
			</View>
		)
	}


	return (
		!menuOpened ? (
			<View style={estilos.paginaInicialContainer}>
				<View style={estilos.logOffButtonContainer} >
					<Button accessibilityLabel="Clique aqui para sair da sua conta do SIGAA" title="SAIR" color="#016EA4" onPress={()=>{handler()}}/>
				</View>
				

				<View style={estilos.turmasOptions}>
					<View style={estilos.classes}>
						<FlatList 
							data={renderedTurmas} 
							renderItem={renderItemFunction} 
							
							
							ListHeaderComponent={
								<><Text>TURMAS</Text></>
							}

							ListEmptyComponent={
								<><Text>Procurando turmas...</Text></>
							}
						/>
					</View>
				</View>
			</View>
		) : (
			<Menu handler={setMenuOpened} data={dataMenu} sessionID={sessionID}/>
		)
	);
}
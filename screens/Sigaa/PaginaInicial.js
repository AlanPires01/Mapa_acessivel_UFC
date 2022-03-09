import React from 'react';
import {View, Text, TouchableOpacity, Button, FlatList} from 'react-native';
import {OldClassesExtract} from './Sigaa-utils.js';
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
		position:'relative'
	},
	turmasButtonText:{
		fontSize:20,
		fontWeight:'bold'
	},
	turmasButton:{
		width:'80%'
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
	classes:{
	},
};

const getOldClasses = async (sessionID)=>{
	const response = await fetch("https://si3.ufc.br/sigaa/portais/discente/turmas.jsf", {
		method:"get",
		headers:{
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Accept-Encoding": "gzip, deflate, br",
			"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
			"Cache-Control": "max-age=0",
			"Connection": "keep-alive",
			"Cookie": `JSESSIONID=${sessionID}`,
			"Host": "si3.ufc.br",
			"Origin": "https://si3.ufc.br"
		}
	})
	const text = await response.text();
	return text;
}


export default function PaginaInicial({sessionID, handler}){
	const [renderedTurmas, setRenderedTurmas] = React.useState([]);
	const [menuOpened, setMenuOpened] = React.useState(false);
	const [dataMenu, setDataMenu] = React.useState([]);

	React.useEffect(()=>{
		(async()=>{
			const text = await getOldClasses(sessionID);
			const ce = new OldClassesExtract;
			ce.updateData(text);

			const a = Object.keys(ce.getData()).map((semestre, index)=>{
				let components = ce.getData()[semestre].map((e,i)=>{
					return (<TouchableOpacity key={i} onPress={()=>{
						setMenuOpened(true);
						setDataMenu([e]);
					}}><Text style={i%2==0?estilos.odd:estilos.even}>{e.codigo} - {e.disciplina}({e.turma}) - {e.creditos}</Text></TouchableOpacity>);
				});
				return (
					<View key={index}>
						<Text>Semestre: {semestre}</Text>
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
							keyExtractor={(item)=>{return item.index}}
							
							ListHeaderComponent={
								<><Text>TURMAS</Text></>
							}

							ListEmptyComponent={
								<><Text>Nenhuma turma encontrada!</Text></>
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
import React from "react";
import {View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { GetHeaders, ParticipantsExtract } from "./Sigaa-utils";

const ParticipantesExtractor = new ParticipantsExtract;

const estilos = {
    participantsContainer:{
        padding:10,
    },
    listaAlunosContainer: {
        marginBottom: 80
    },
    listaProfessoresContainer: {
        marginBottom: 80,
    },
    alunoContainer: {
        paddingVertical: 10,
        paddingHorizontal: 4,
        backgroundColor: "#ddd",
        marginBottom: 4,
    },
    button: {
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        width: "30%",
        marginTop: 10,
        marginBottom: 10
    },
    buttonSelecionado: {
        backgroundColor: "#ccc"
    },
    leftButton: {
        borderRightWidth: 0,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    rigthButton: {
        borderLeftWidth: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-start"
    }
}

export default function Participantes({sessionID, handler, disciplina}){
    const [selecionado, setSelecionado] = React.useState(true);
    const [professores, setProfessores] = React.useState([]);
    const [alunos, setAlunos] = React.useState([]);

    React.useEffect( ()=>{
        (async()=>{
            const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
                method: "post",
                headers: GetHeaders(sessionID),
                body: disciplina.payload
            })
            const responseText = await response.text();
            ParticipantesExtractor.updateData(responseText);
            setProfessores(ParticipantesExtractor.getData().professores);
            setAlunos(ParticipantesExtractor.getData().alunos);
        })();
    },[])

    function renderProfessores({item}){
        return (
            <View style={estilos.alunoContainer} accessible={true}>
                <Text>{item.nome}</Text>
                <Text>Departamento: {item.departamento}</Text>
                <Text>Formação: {item.formacao}</Text>
                <Text>Email: {item.email}</Text>
                {item.turmas !== null ? <Text>Turma(s): {item.turmas}</Text> : null}
            </View>
        );
    }

    function renderAlunos({item}){
        return (
            <View style={estilos.alunoContainer} accessible={true}>
                <Text style={{fontWeight:"bold", marginBottom:7}}>{item.nome}</Text>
                <Text>Matrícula: {item.matricula}</Text>
                <Text>Curso: {item.curso}</Text>
                <Text>Email: {item.email}</Text>
                {item.turma !== null ? <Text>Turma: {item.turma}</Text> : null}
            </View>
        );
    }

    return (
        <View style={estilos.participantsContainer}>
            <Button title="Voltar" onPress={()=>{handler(true)}}/>
            <View style={estilos.buttonContainer}>
                <TouchableOpacity accessibilityLabel={`${selecionado?"Selecionado Professores":""}`} onPress={()=>{setSelecionado(true);}} style={[estilos.button, estilos.leftButton, selecionado?estilos.buttonSelecionado: null]}>
                    <Text style={{textAlign: "center"}}>Professores</Text>
                </TouchableOpacity>
                <TouchableOpacity accessibilityLabel={`${!selecionado?"Selecionado Alunos":""}`} onPress={()=>{setSelecionado(false);}} style={[estilos.button, estilos.rigthButton, !selecionado?estilos.buttonSelecionado: null]}>
                    <Text style={{textAlign: "center"}}>Alunos</Text>
                </TouchableOpacity>
            </View>

            {selecionado? (
                <FlatList 
                    style={estilos.listaProfessoresContainer} 
                    ListEmptyComponent={
                        <Text>Procurando professores...</Text>
                    }
                    data={professores} 
                    renderItem={renderProfessores}
                    keyExtractor={(e)=>{return e.nome}}
                />
                ):(
                <FlatList 
                    style={estilos.listaAlunosContainer} 
                    ListEmptyComponent={
                        <Text>Procurando alunos...</Text>
                    }
                    data={alunos} 
                    renderItem={renderAlunos} 
                    keyExtractor={(e)=>{return e.nome + e.matricula}}
                />
                )
            }
            
            
            
        </View>
    );
}
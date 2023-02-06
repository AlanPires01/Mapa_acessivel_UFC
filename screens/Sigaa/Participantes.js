import React from "react";
import {View, Text, Button, FlatList, TouchableOpacity, useColorScheme} from "react-native";
import { GetHeaders, ParticipantsExtract } from "./Sigaa-utils";
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';

const ParticipantesExtractor = new ParticipantsExtract;

export default function Participantes({sessionID, handler, disciplina}){
    const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
    const [selecionado, setSelecionado] = React.useState(true);
    const [professores, setProfessores] = React.useState([]);
    const [alunos, setAlunos] = React.useState([]);
    const [isMounted, setIsMounted] = React.useState(true);

    React.useEffect( ()=>{
        setIsMounted(true);
        (async()=>{
            const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
                method: "post",
                headers: GetHeaders(sessionID),
                body: disciplina.payload
            })
            const responseText = await response.text();
            ParticipantesExtractor.updateData(responseText);
            if(isMounted){
                setProfessores(ParticipantesExtractor.getData().professores);
                setAlunos(ParticipantesExtractor.getData().alunos);
            }
            
        })();
        return ()=>{
            setIsMounted(false);
        };
    },[])

    function renderProfessores({item}){
        return (
            <View style={theme.alunoContainer} accessible={true}>
                <Text style={{fontWeight:"bold", marginBottom:7}}>{item.nome}</Text>
                <Text>Departamento: {item.departamento}</Text>
                <Text>Formação: {item.formacao}</Text>
                <Text>Email: {item.email}</Text>
                {item.turmas !== null ? <Text>Turma(s): {item.turmas}</Text> : null}
            </View>
        );
    }

    function renderAlunos({item}){
        return (
            <View style={theme.alunoContainer} accessible={true}>
                <Text style={{fontWeight:"bold", marginBottom:7}}>{item.nome}</Text>
                <Text>Matrícula: {item.matricula}</Text>
                <Text>Curso: {item.curso}</Text>
                <Text>Email: {item.email}</Text>
                {item.turma !== null ? <Text>Turma: {item.turma}</Text> : null}
            </View>
        );
    }

    return (
        <View style={theme.participantsContainer}>
            <Button title="Voltar" onPress={()=>{handler(true)}}/>
            <View style={theme.buttonContainer}>
                <TouchableOpacity accessibilityLabel={`${selecionado?"Selecionado Professores":""}`} onPress={()=>{setSelecionado(true);}} style={[theme.button, theme.leftButton, selecionado?theme.buttonSelecionado: null]}>
                    <Text style={theme.textMap}>Professores</Text>
                </TouchableOpacity>
                <TouchableOpacity accessibilityLabel={`${!selecionado?"Selecionado Alunos":""}`} onPress={()=>{setSelecionado(false);}} style={[theme.button, theme.rigthButton, !selecionado?theme.buttonSelecionado: null]}>
                    <Text style={theme.textMap}>Alunos</Text>
                </TouchableOpacity>
            </View>

            {selecionado? (
                <FlatList 
                    style={theme.listaProfessoresContainer} 
                    ListEmptyComponent={
                        <Text style={theme.paragrafo}>Procurando professores...</Text>
                    }
                    data={professores} 
                    renderItem={renderProfessores}
                    keyExtractor={(e)=>{return e.nome}}
                />
                ):(
                <FlatList 
                    style={theme.listaAlunosContainer} 
                    ListEmptyComponent={
                        <Text style={theme.paragrafo}>Procurando alunos...</Text>
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

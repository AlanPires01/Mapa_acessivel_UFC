import React from "react";
import {View, Text, Button, FlatList, TouchableOpacity, Alert, useColorScheme} from "react-native";
import { GetHeaders } from "./Sigaa-utils";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import {Buffer} from "buffer";
import axios from 'axios';
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';

export default function Arquivos({data, handler, sessionID}){
    const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
    const [baixando, setBaixando] = React.useState(false);
    function download(item){

        setBaixando(true);
        console.log("Iniciando Download");

        (async()=>{
            const response = await axios({
                method: 'post',
                url: 'https://si3.ufc.br/sigaa/ava/index.jsf',
                data: item.payload,
                headers: GetHeaders(sessionID),
                responseType: "arraybuffer"
            });

            const buff = Buffer.from(response.data, 'base64')
            const saida =  buff.toString('base64')
            let fileName = response.headers["content-disposition"].match(/filename="(.+)"/)[1];
            let uri = FileSystem.documentDirectory + fileName;
            await FileSystem.writeAsStringAsync(uri, saida, { encoding: FileSystem.EncodingType.Base64 });
            await Sharing.shareAsync(uri);
            console.log("Download Completo!");
            Alert.alert("Download completo", `O arquivo ${fileName} foi baixado com sucesso!`);

        })();

        setBaixando(false);
    }

    function renderItem({item}){
        return (
            <View style={theme.fileContainerSIGAA}>
                <TouchableOpacity onPress={()=>{
                        if(!baixando){
                            Alert.alert("Download Iniciado", "Por favor espere o download finalizar");
                            download(item);
                        }
                        else{
                            Alert.alert("Outro arquivo está sendo baixado!");
                        }
                        
                    }}>
                    <Text>{item.nome}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={theme.containerSIGAA}>
            <Button title="Voltar" onPress={()=>{handler(true)}}/>
            <FlatList data={data} renderItem={renderItem}
                ListEmptyComponent={<Text style={theme.aviso}>Nenhum arquivo foi encontrado nessa turma!</Text>}
                keyExtractor={(item)=>{return item.nome+item.payload}}
            />
        </View>
    );
}

const estilos = {
    fileContainer: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "#ccc"
    },
    container: {
        padding: 10,
        marginBottom: 40
    }
}
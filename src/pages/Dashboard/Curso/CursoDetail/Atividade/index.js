import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { CardAtividade } from '../../../../../components/Cards/CardAtividade';

import * as DocumentPicker from 'expo-document-picker';
import { CardFile } from '../../../../../components/Cards/CardFile';

export default function Atividade(props) {
    const [filename, setFilename] = useState('');

    const navigation = useNavigation();

    async function pickDocument (){
        console.log("iniciando");
        let result = await DocumentPicker.getDocumentAsync({});
        // alert(result.uri);
        // alert(result.name);
        // console.log(result);
        setFilename(result.name);
        console.log(filename);
        alert(filename);
        result = null;
        // setFiles(result);
        // console.log(filename);
        // console.log(files);
    }

    // const pickDocument = async () => {
    //     console.log("iniciando");
    //     let result = await DocumentPicker.getDocumentAsync({});
    //     // alert(result.uri);
    //     // alert(result.name);
    //     // console.log(result);
    //     setFilename(result.name);
    //     console.log(filename);
    //     alert(filename);
    //     result = null;
    //     // setFiles(result);
    //     // console.log(filename);
    //     // console.log(files);
    // }

    return (
        <View style={styles.container}>
            <Text style={{marginTop: 10}}>{props.route.params.descricao}</Text>

            <TouchableOpacity style={styles.button} onPress={pickDocument()}>
                <Text style={{ color: "#FFF" }}>Selecionar Arquivos</Text>
            </TouchableOpacity>

            {filename !== '' && (
                <CardFile data={filename} />
            )}

            {/* 
            <Button
                title="Enviar Arquivos"
                onPress={pickDocument}
            /> */}

            {/* <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 24 }}
                data={files}
                KeyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardAtividade data={item} />}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingVertical: '1%',
        // paddingEnd: '4%',
        // paddingStart: '4%',
        alignItems: 'center'
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10,
        // borderWidth: 2,
        // marginTop: 12
    },
})
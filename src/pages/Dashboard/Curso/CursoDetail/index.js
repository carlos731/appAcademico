import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { CardAtividade } from '../../../../components/Cards/CardAtividade';
import FormCreateObjeto from '../../../../components/Dialog/Forms/FormCreateObjeto';
import { CardObjetoAprendizagem } from '../../../../components/Cards/CardObjetoAprendizagem';

import { api } from '../../../../services/api';

export default function CursoDetail() {
    const [objetosAprendizagem, setObjetosAprendizagem] = useState([]);

    const atividades = [
        {
            id: 1,
            descricao: 'Tarefa 1',
        },
        {
            id: 2,
            descricao: 'Tarefa 2',
        },
        {
            id: 3,
            descricao: 'Tarefa 3',
        },
        {
            id: 4,
            descricao: 'Tarefa 4',
        }
    ];

    

    const navigation = useNavigation();

    function navigate() {
        navigation.navigate('CursoDetailScreem');
    }

    useEffect(() => {
        async function getObjetoAprendizagem() {
            try {
                const response = await api.get('/api/objetoAprendizagem');

                //console.log(JSON.stringify(response.data));

                setObjetosAprendizagem(
                    response.data
                );

                // console.log(response.data);

            } catch (err) {
                console.log(err);
            }
        }

        navigation.navigate('CursoDetailScreem');
        getObjetoAprendizagem();
    }, []);

    return (
        <View style={styles.container}>
            {/* <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 24 }}
                data={atividades}
                KeyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardAtividade data={item} />}
            /> */}
            {/* <Text>Detail Curso</Text> */}
            <FormCreateObjeto/>

            <Text>Objetos de Aprendizagem</Text>
            {/* <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 24 }}
                data={objetosAprendizagem}
                KeyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardObjetoAprendizagem data={item} />}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: '0%',
        paddingEnd: '4%',
        paddingStart: '4%',
    },
})
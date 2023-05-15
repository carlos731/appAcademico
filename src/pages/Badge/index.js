import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';

import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

import CardBadge from '../../components/Cards/CardBadge';

import ImageUpload from '../../upload/image';

export default function Badge() {
    const navigation = useNavigation();

    const [nivel, setNivel] = useState([]);

    useEffect(() => {
        async function getNivel() {
            try {
                const response = await api.get('/api/badge-nivel');

                //console.log(JSON.stringify(response.data));

                setNivel(
                    response.data
                );

            } catch (err) {
                console.log(err);
            }
        }

        getNivel();
    }, []);

    function addBadge(key){
        alert(key);
    }

    return (
        <>
            <View styles={styles.container}>

                <ScrollView>
                    {
                        nivel.map(niveis => {
                            return (
                                <View key={niveis.id} style={{ marginBottom: 5, marginTop: 10 }}>

                                    <View style={{ backgroundColor: 'white', marginTop: 5, padding: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={styles.titulo}>{niveis.descricao}</Text>

                                        <View style={styles.buttons}>
                                            <TouchableOpacity style={styles.buttonAdd} >
                                                <Feather
                                                    name="plus"
                                                    size={24}
                                                    color="#000"
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.buttonAdd}>
                                                <Feather
                                                    name="filter"
                                                    size={24}
                                                    color="#000"
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <FlatList
                                        style={{flex: 1, marginTop: 10}}
                                        horizontal={true}
                                        //contentContainerStyle={{alignSelf: 'stretch'/*, flexDirection: 'row', flexWrap: 'wrap',*/}}
                                        showsVerticalScrollIndicator={false}
                                        //numColumns={4}
                                        data={niveis.badges}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => <CardBadge data={item} />}
                                    />

                                    {/* {
                                        niveis.badges.map(badges => (
                                            <View key={niveis.badges.id}>
                                                <Text>{badges.descricao}</Text> */}

                                    {/* <CardBadge data={badges} /> */}

                                    {/* <FlatList
                                                    horizontal={true}
                                                    showsVerticalScrollIndicator={false}
                                                    data={niveis.badges}
                                                    keyExtractor={(item) => item.id}
                                                    renderItem={({ item }) => <CardBadge data={item} />}
                                                /> */}
                                    {/* 
                                            </View>
                                        ))
                                    } */}
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
        width: '15%'
    },
    buttonAdd: {
    },
    contentCard: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    nivelCard: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    }
});
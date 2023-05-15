import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, FlatList, TextInput } from 'react-native';

import CardBadge from '../../../components/Cards/CardBadge';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import SearchBar from '../../../components/SearchBar';

import { api } from '../../../services/api';

export default function BadgeSearch() {
    const navigation = useNavigation();

    const [pesquisa, setPesquisa] = useState({
        descricao: 'j',
        nivel: '2',
    });
    const [badges, setBadges] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        async function getBadges() {
            try {
                const response = await api.get(`/api/badge/busca?descricao=${pesquisa.descricao}&nivel=${pesquisa.nivel}`);

                //console.log(JSON.stringify(response.data));

                setBadges(
                    response.data
                );

            } catch (err) {
                console.log(err);
            }
        }

        getBadges();
    }, []);

    return (
        <>
            <SafeAreaView>

                <View style={styles.header}>
                    <View style={styles.logo}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather
                                name="arrow-left"
                                size={24}
                                color="#004587"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoes}>
                        <TextInput
                            placeholder="pesquisa"
                            style={styles.input}
                            placeholderTextColor="#000"
                            value={pesquisa.descricao}
                            onChangeText={setPesquisa}
                        />
                    </View>
                </View>

                {/* <View style={styles.logo}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather
                                name="arrow-left"
                                size={24}
                                color="#004587"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoes}>
                        <TextInput
                            placeholder="pesquisa"
                            style={styles.input}
                            placeholderTextColor="#000"
                            value={pesquisa}
                            onChangeText={setPesquisa}
                        />
                    </View> */}


                <ScrollView>
                    <FlatList
                        numColumns={3}
                        data={badges}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CardBadge data={item} />}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: '#FFF',
        height: 400,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 3,
    },
    botoes: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        color: '#000',
    },
    container: {
        flex: 1,
    },
    header: {

    },
    input: {
        width: '70%',
        height: 30,
        backgroundColor: '#FFF',
        color: '#000',
        justifyContent: 'space-between'
    },
});
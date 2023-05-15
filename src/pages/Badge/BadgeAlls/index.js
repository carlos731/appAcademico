import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, FlatList, VirtualizedList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { api } from '../../../services/api';

import { Feather } from '@expo/vector-icons';

import Header from '../../../components/Header';

import CardBadge from '../../../components/Cards/CardBadge';

export default function BadgeNivel() {
    const navigation = useNavigation();

    const [badges, setBadges] = useState([]);

    useEffect(() => {
        async function getBadges() {
            try {
                const response = await api.get('/api/badge');

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

    function addBadge(key) {
        alert(key);
    }

    return (
        <>
            <View styles={styles.container}>
                {/* <ScrollView> */}
                    <SafeAreaView>
                        <FlatList
                            numColumns={3}
                            data={badges}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <CardBadge data={item} />}
                        />
                    </SafeAreaView>
                    {/* {
                        badges.map(badge => {
                            return (
                                <View key={badge.id}>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <CardBadge data={badges} />
                                    </View>
                                </View>
                            )
                        })
                    } */}
                {/* </ScrollView> */}
            </View>
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
    buttons: {
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
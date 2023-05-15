import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, FlatList, VirtualizedList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CardGrupo from '../../../components/Cards/CardGrupo';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Grupo() {
    const navigation = useNavigation();

    const grupos = [
        {
            id: 1,
            name: 'Grupo 1',
            users: 5,
            mensagens: 2,
            favorite: true,
        },
        {
            id: 2,
            name: 'Grupo 2',
            users: 10,
            mensagens: 5,
            favorite: false,
        },
        {
            id: 3,
            name: 'Grupo 3',
            users: 10,
            mensagens: 5,
            favorite: false,
        },
        {
            id: 4,
            name: 'Grupo 4',
            users: 10,
            mensagens: 5,
            favorite: false,
        },
        {
            id: 5,
            name: 'Grupo 5',
            users: 10,
            mensagens: 5,
            favorite: false,
        },

    ]

    return (
        <>
            <View styles={styles.container}>
                <SafeAreaView>
                    <FlatList
                        horizontal={false}
                        showsVerticalScrollIndicator={true}
                        data={grupos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CardGrupo data={item} />}
                    />
                    {/* <FabButton
                            style={{ bottom: 80, right: 60 }}
                        /> */}
                </SafeAreaView>
            </View>
            <View style={styles.end}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome
                        name="plus"
                        size={22}
                        color="#FFF"
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: '0%',
        paddingHorizonta: '1%',
        paddingEnd: '4%',
        paddingStart: '4%',
        backgroundColor: 'blue',
        height: '100%',
    },
    end: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        bottom: 50,
        right: 40,
    },
    button: {
        height: 60,
        width: 60,
        backgroundColor: '#004587',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    }
});
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { AuthContext } from '../../context/AuthContext';

import { api } from '../../services/api';

function SearchBar() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: '#FFF',
        height: 60,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 3,
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    icon: {
        marginRight: 13,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 3,
        borderWidth: 2,
        borderColor: 'white',
        // borderColor: '#004587'
    }
});
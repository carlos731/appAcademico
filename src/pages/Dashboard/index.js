import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';


import CardBadge from '../../components/Cards/CardBadge';


export default function Curso() {
    const navigation = useNavigation();

    function navigate() {
        navigation.navigate('BadgeScreem');
    }

    return (
        <>
            <Header />
            <View style={styles.pagina}>
                <View style={styles.container}>
                    {/* <ScrollView> */}
                        {/* <TouchableOpacity onPress={navigate}> */}
                            <Text>Dashboard</Text>
                        {/* </TouchableOpacity> */}
                    {/* </ScrollView> */}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    container:{

    }
})
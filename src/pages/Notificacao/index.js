import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';

export default function Notificacao() {
    const navigation = useNavigation();

    return (
        <>
        {/* <Header/> */}
            <SafeAreaView style={styles.container}>
                <Text>Notificações</Text>
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
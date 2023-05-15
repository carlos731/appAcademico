import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';

export default function Notas() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Notas</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
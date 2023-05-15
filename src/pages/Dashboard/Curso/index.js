import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import Header from '../../../components/Header';

import { useNavigation } from '@react-navigation/native';

import CardCurso from '../../../components/Cards/CardCurso';
import CardModulo from '../../../components/Cards/CardModulo';

export default function Curso() {
    const navigation = useNavigation();

    function navigate() {
        navigation.navigate('BadgeScreem');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <ScrollView>
        
                    <ScrollView horizontal={true}>
                        <CardModulo name="Módulo 1"/>
                        <CardModulo name="Módulo 2"/>
                        <CardModulo name="Módulo 3"/>
                        <CardModulo name="Módulo 4"/>
                        <CardModulo name="Módulo 5"/>
                    </ScrollView>

                    <View style={styles.sectionCard} >
                        <CardCurso name="Java Web"  />
                        <CardCurso name="Português Instrumental" />
                        <CardCurso name="Programação Web 1" />
                        <CardCurso name="Programação Dispositivos Móveis" />
                        <CardCurso name="Arquitetura de Computadores" />
                        <CardCurso name="Estatistica e Probabilidade" />
                        <CardCurso name="Cálculo 1" />
                        <CardCurso name="Curso 1" />
                        <CardCurso name="Curso 2" />
                        <CardCurso name="Curso 3" />
                    </View>

                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        //backgroundColor: '#000',
    },
    sectionCard: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
})
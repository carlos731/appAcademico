import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView, SafeAreaView, Image, FlatList, VirtualizedList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CardContato from '../../../components/Cards/CardContato';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MensagensPrivadas() {
    const navigation = useNavigation();

    const contatos = [
        {
            id: 1,
            name: 'Carlos Henrique',
            telefone: '(21) 99999-9999',
            email: 'carlos@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 2,
            name: 'Agnaldo Cieslak',
            telefone: '(21) 99999-9999',
            email: 'agnaldo@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 3,
            name: 'Johnny',
            telefone: '(21) 99999-9999',
            email: 'johnny@gmail.com',
            perfil: 'Professor',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 4,
            name: 'Yuri Paulino',
            telefone: '(21) 99999-9999',
            email: 'yuri@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 5,
            name: 'Leticia Soares',
            telefone: '(21) 99999-9999',
            email: 'leticia@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 6,
            name: 'Douglas Vasconcellos',
            telefone: '(21) 99999-9999',
            email: 'douglas@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 7,
            name: 'Lucas Henrique',
            telefone: '(21) 99999-9999',
            email: 'lucas@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 8,
            name: 'Carolina Macedo',
            telefone: '(21) 99999-9999',
            email: 'carlolina@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 9,
            name: 'Yngrid Riter',
            telefone: '(21) 99999-9999',
            email: 'yngrid@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 10,
            name: 'Miguel Jesus',
            telefone: '(21) 99999-9999',
            email: 'miguel@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
        {
            id: 11,
            name: 'Matheus Freitas',
            telefone: '(21) 99999-9999',
            email: 'matheus@gmail.com',
            perfil: 'Aluno',
            ultimaMensagem: 'Pessoal tarefa disponível no moodle.'
        },
    ]

    return (
        <>
            <View styles={styles.container}>
                <SafeAreaView>
                    <FlatList
                        horizontal={false}
                        showsVerticalScrollIndicator={true}
                        data={contatos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CardContato data={item} />}
                    />
                    {/* <FabButton
                            style={{ bottom: 80, right: 60 }}
                        /> */}
                </SafeAreaView>
                <View style={styles.end}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ContatosScreem")}>
                        <FontAwesome
                            name="address-book"
                            size={22}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
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
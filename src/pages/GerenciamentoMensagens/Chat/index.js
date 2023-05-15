import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import HeaderContato from '../../../components/HeaderContato';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';

export default function Chat(props) {
    const [mensagem, setMensagem] = useState('');

    return (
        <>
            <HeaderContato data={props.route.params.name} />
            <ScrollView>
                <View style={styles.container}>
                    <Text>Chat</Text>
                </View>
            </ScrollView>
            <View style={styles.end}>
                <View style={styles.inputLabel}>
                    <TextInput
                        multiline={true}
                        numberOfLines={20}
                        placeholder="Insira uma mensagem"
                        style={styles.input}
                        placeholderTextColor="#000"
                        value={mensagem}
                        onChangeText={setMensagem}
                    />
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.button}>
                        <Feather name="paperclip" size={22} color="#FFF" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {marginLeft: 5,}]}>
                        <Icon name="send" size={22} color="#FFF" />
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    end: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        left: 0,
        width: '100%',
        // backgroundColor: 'white',
        height: 60,
        paddingLeft: 14,
    },
    inputLabel: {
        width: '73%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        // marginBottom: 10,
        paddingLeft: 0
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#004587',
        paddingHorizontal: 8,
        color: '#000',
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        borderRadius: 40,
        width: 40,
        height: 40,
        backgroundColor: '#023c7c',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
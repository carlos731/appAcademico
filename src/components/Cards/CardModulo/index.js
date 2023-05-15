import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

function CardModulo(props) {

    const image = { uri: '../../assets/fundo-curso.png'};

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover"
                >
                    <Text style={styles.cardText}>{props.name}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 100,
        backgroundColor: '#FFF',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 4,
    },
    card: {
        alignItems: 'center',
    },
    cardImage: {
        width: '90%',
        height: 110,
        borderRadius: 4,
        marginBottom: 0,
    },
    cardText: {
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default CardModulo;




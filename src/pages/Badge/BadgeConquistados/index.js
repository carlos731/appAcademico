import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BadgeConquistados(){
    return(
        <View>
            <Text>Badges Conquistados</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Solicitacoess() {
    return (
        <View style={styles.container}>
            <Text>Solicitacões</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
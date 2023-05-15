import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function CardFile({ data }) {
    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.start}>
                <TouchableOpacity>
                    <Feather
                        name="file"
                        color="#000"
                        size={20}
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>
                    {data}
                </Text>
            </View>

            {/* <View style={styles.end}> */}
                {/* <TouchableOpacity style={styles.checkBox}></TouchableOpacity> */}
                <TouchableOpacity>
                    <Feather
                        name="x-square"
                        color="#000"
                        size={20}
                        style={{ }}
                    />
                </TouchableOpacity>

            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        // flex: 1,
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#8a8a8a',
    },
    text: {
        color: '#000',
        // fontSize: 15,
        // fontWeight: 'bold'
    },
    start: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    end: {
        width: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkBox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#000',

    }
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function CardObjetoAprendizagem({ data }) {
    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    // const id = data.id;
    const descricao = data.descricao;

    const fileType = data.tipo;
    // console.log(fileType);

    // const image = `data:image/png;base64,${data.blob}`;

    function renderIconFile() {
        if (data.tipo === 'application/pdf' || data.tipo === 'DocumentPicker/pdf') {
            return (
                <Image
                    source={require('../../../assets/files/pdf.png')}
                    style={styles.cardImage}
                />
            );
        } else if (data.tipo === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || data.tipo === 'DocumentPicker/docx') {
            return (
                <Image
                    source={require('../../../assets/files/doc.png')}
                    style={styles.cardImage}
                />
            );
        } else if (data.tipo === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
            return (
                <Image
                    source={require('../../../assets/files/ppt.png')}
                    style={styles.cardImage}
                />
            );
        } else if (data.tipo === 'image/png' || data.tipo === 'image/jpeg' || data.tipo === 'image/jpg' || data.tipo === 'DocumentPicker/jpg') {
            return (
                <Image
                    source={require('../../../assets/files/jpg-file.png')}
                    style={styles.cardImage}
                />
            );
        }
    }

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.start}>
                <TouchableOpacity>
                    {renderIconFile()}
                </TouchableOpacity>

                <Text style={styles.text}>
                    {data.descricao}
                </Text>

            </View>

            <View style={styles.end}>
                <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#205395',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // marginBottom: 4,
        marginTop: 4,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#8a8a8a',
        width: '95%',
        alignSelf: 'center'
    },
    text: {
        color: '#FFF',
        elevation: 10,
        // fontSize: 15,
        // fontWeight: 'bold'
    },
    start: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    end: {
        width: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkBox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#FFF'
    },
    cardImage: {
        width: 30,
        height: 30,
        marginRight: 15,
    }
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

function CardGrupo({ data }) {
    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    const id = data.id;
    const descricao = data.name;

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.start}>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU',
                        }}
                        style={styles.avatar}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={[styles.text, { marginBottom: 2 }]}>
                        {data.name}
                    </Text>
                </View>
            </View>

            <View style={styles.end}>
                <TouchableOpacity>
                    <Feather
                        name="message-square"
                        color="#000"
                        size={20}
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather
                        name="users"
                        color="#000"
                        size={20}
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather
                        name="star"
                        color="#000"
                        size={20}
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 5,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
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
        width: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkBox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#000',

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 3,
        borderWidth: 2,
        borderColor: 'white',
        // borderColor: '#004587'
    }
});

export default CardGrupo; 
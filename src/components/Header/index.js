import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { AuthContext } from '../../context/AuthContext';

import { api } from '../../services/api';

function Header() {
    const navigation = useNavigation();

    const [usuario, setUsuario] = useState({
        id: '',
        cpf: '',
        nomeCompleto: '',
        apelido: '',
        email: '',
        dataNascimento: '',
        telefone: '',
        foto: '',
        perfis: [],
        status: '',
    });

    // const { signOut } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await api.get(`/api/user/${user.id}`);

                const {
                    id,
                    cpf,
                    nomeCompleto,
                    apelido,
                    dataNascimento,
                    telefone,
                    foto,
                    perfis,
                    status
                } = response.data;

                setUsuario({
                    id,
                    cpf,
                    nomeCompleto,
                    apelido,
                    dataNascimento,
                    telefone,
                    foto,
                    perfis,
                    status
                })

            } catch (err) {
                console.log(err);
            }
        }

        getUser();
    }, []);

    const image = `data:image/png;base64,${user.foto}`;
    const apelido = usuario.apelido;

    //console.log(usuario);

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Feather
                            name="menu"
                            size={24}
                            color="#004587"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <Image
                            source={require('../../assets/logo-header.png')}
                            style={{ width: 100, height: 30}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("MensagenScreem")}>
                        <Feather name="message-circle" size={22} color="#004587" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Notificacao')}>
                        <Feather name="bell" size={24} color="#004587" />
                    </TouchableOpacity>

                    {user.foto !== null && (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                source={{
                                    uri: image,
                                    // uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU',
                                }}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                    )}


                    {user.foto === null &&
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                source={{
                                    // uri: image,
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU',
                                }}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                    }

                </View>



            </View>
        </SafeAreaView>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: '#FFF',
        height: 60,
        elevation: 10
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 3,
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    icon: {
        marginRight: 13,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 3,
        borderWidth: 2,
        borderColor: 'white',
        // borderColor: '#004587'
    }
});
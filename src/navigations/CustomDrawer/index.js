import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, Switch } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, } from '@react-navigation/drawer';

import { AuthContext } from '../../context/AuthContext';

import { api } from '../../services/api';

const CustomDrawer = (props) => {
    const { signOut } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation();

    function badgeNavigate() {
        navigation.navigate('BadgesScreem');
    }

    const image = `data:image/png;base64,${user.foto}`;

    return (
        <ScrollView style={styles.fundoDrawer}>
            {/* <ImageBackground 
                source={require('../../assets/logoSenac.png')}
                style={{ width: undefined, padding: 18, paddingTop: 48}}
            > 
            </ImageBackground>
            */}

            <View style={styles.perfil}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {user.foto === null &&(
                        <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU',
                        }}
                        style={styles.avatar}
                    />
                    )}
                    {user.foto !== null &&(
                        <Image
                        source={{
                            uri: image,
                        }}
                        style={styles.avatar}
                    />
                    )}
                    
                    <Text style={styles.name}>{user.apelido}</Text>
                    <Text style={{ color: '#000', }}>{user.email}</Text>
                </View>
            </View>

            <View style={styles.container}>

                <View style={styles.firstButtons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NotasScreem')}>
                        <Feather
                            name="bar-chart-2"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={[styles.buttonText, { color: '#000' }]}>Notas</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CalendarioScreem')}>
                        <Feather
                            name="calendar"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={[styles.buttonText, { color: '#000' }]}>Calendario</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ArquivoScreem')}>
                        <Feather
                            name="file"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={[styles.buttonText, { color: '#000' }]}>Arquivos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BadgeScreem')}>
                        <Feather
                            name="award"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={[styles.buttonText, { color: '#000' }]}>Badges</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfiguracaoScreem')}>
                        <Feather
                            name="settings"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={[styles.buttonText, { color: '#000' }]}>Configurações</Text>
                    </TouchableOpacity>

                    <View style={styles.button}>
                        <Feather
                            name="moon"//sun
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={[styles.buttonText, { color: '#000'}]}>Fundo</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#3fffa3' }}
                            thumbColor={isEnabled ? '#3fffa3' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MensagenScreem')}>
                        <Feather
                            name="message-square"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={[styles.buttonText, { color: '#000' }]}>Mensagens</Text>
                    </TouchableOpacity> */}

                </View>

                {/* <DrawerItem
                    {...props}
                    label={({focused}) => (
                        <Text style={{color: focused ? '#FFF' : '#000'}}>
                            Help
                        </Text>
                    )}
                    onPress={() => navigation.navigate('Dashboard')}
                    activeBackgroundColor='red'
                    inactiveBackgroundColor='orange'
                />     */}

                <View>

                </View>

                <View style={styles.secondButtons}>
                    <TouchableOpacity style={[styles.bottomLogout, { backgroundColor: '#FFF' }]}>
                        <Feather
                            name="user"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={styles.buttonText}>Mudar de conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomLogout} onPress={signOut}>
                        <Feather
                            name="log-out"
                            size={20}
                            color="#000"
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={styles.buttonText}>Sair</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    fundoDrawer: {
        backgroundColor: '#FFF',
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#000',
    },
    perfil: {
        backgroundColor: 'transparent',//'#004587'
        width: undefined,
        padding: 18,
        paddingTop: 48,
        marginBottom: 10,
        borderBottomWidth: 0.2,
        borderColor: '#000'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#FFF',//004587
    },
    name: {
        color: "#000",
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8,
    },
    firstButtons: {
        alignItems: 'center',
        marginBottom: 160,
        //borderBottomWidth: 0.2,
        //borderColor: '#000'
    },
    secondButtons: {
        alignItems: 'center',
        ///marginBottom: 50,
        borderTopWidth: 0.2,
        borderColor: '#000',
    },
    button: {
        backgroundColor: "#FFF",
        width: '93%',
        borderRadius: 4,
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        // borderColor: '#000',
        // borderWidth: 2,
    },
    buttonFundo: {
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonText: {
        marginLeft: 20,
        color: "#000",
        fontWeight: 'bold',
    },
    // drawerBottom: {
    //     flexDirection: 'row',
    //     position: 'absolute',
    //     fontWeight: 'bold',
    //     right: 0,
    //     left: 0,
    //     bottom: 50,
    //     backgroundColor: '#FF3F4B',
    //     padding: 15,
    //     marginLeft: 10,
    //     marginRight: 10,
    //     borderRadius: 6,
    //     height: 50,
    // },
    bottomLogout: {
        backgroundColor: "#FF3F4B",
        width: '93%',
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 4,
        // borderColor: '#000',
        // borderWidth: 2,
    }
});
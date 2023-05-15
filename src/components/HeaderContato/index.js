import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

function HeaderContato( props ) {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather
                            name="arrow-left"
                            size={24}
                            color="#004587"
                            style={{ marginRight: 4 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU',
                            }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 16 }}>
                            {props.data}
                        </Text>
                        <Text style={{ fontSize: 10 }}>
                            Visto por ultimo hoje as 16:05
                        </Text>
                    </View>
                </View>

                {/* <View style={styles.botoes}>
                    <TouchableOpacity style={styles.icon}>
                        <Feather name="search" size={22} color="#023c7c" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} >
                        <Feather name="bell" size={24} color="#023c7c" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                            }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View> */}

            </View>
        </SafeAreaView>
    );
}

export default HeaderContato;

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
        marginRight: 17,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 5,
        // borderWidth: 2,
        // borderColor: '#004587'
    }
});
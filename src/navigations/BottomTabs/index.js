import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useNavigation from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import Dashboard from '../../pages/Dashboard';
import Badge from '../../pages/Badge';
import Mensagens from '../../pages/mensagens';
import Notificacao from '../../pages/Notificacao';
import Calendario from '../../pages/Calendario';
import Curso from '../../pages/Dashboard/Curso';
import TopTabsMensagens from '../TopTabsMensagens';
import UCs from '../../pages/Aprendizagem/UCs';

const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName='Aprendizado'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#004587',
                tabBarInactiveTintColor: '#000',
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    paddingBottom: 2,
                }
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            {/* <View style={{
                                height: 55,
                                width: 80,
                                alignItems: 'center',
                                justifyContent: 'center',
                                // borderTopWidth: 2,
                                // borderColor: focused ? '#004587' : 'transparent',
                            }} 
                            >*/}
                                <Feather
                                    name='home'
                                    size={20}
                                    color={focused ? '#004587' : '#000'}
                                />
                            {/* </View> */}
                        </>
                    )

                }}
            />
            <Tab.Screen
                name="Mensagens"
                component={Mensagens}//TopTabsMensagens
                options={{
                    // headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <>
                            {/* <View style={{
                                height: 55,
                                width: 80,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopWidth: 2,
                                borderColor: focused ? '#004587' : 'transparent',
                            }}
                            > */}
                                <Feather
                                    name='message-circle'
                                    size={20}
                                    color={focused ? '#004587' : '#000'}
                                />
                            {/* </View> */}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="Aprendizado"
                component={UCs}
                options={{
                    // headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <>
                            {/* <View style={{
                                height: 55,
                                width: 80,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopWidth: 2,
                                borderColor: focused ? '#004587' : 'transparent',
                            }}
                            > */}
                                <Feather
                                    name='book-open'
                                    size={20}
                                    color={focused ? '#004587' : '#000'}
                                />
                            {/* </View> */}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="Notificacao"
                component={Notificacao}
                options={{
                    // headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <>
                            {/* <View style={{
                                height: 55,
                                width: 80,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopWidth: 2,
                                borderColor: focused ? '#004587' : 'transparent',
                            }} 
                            >*/}
                                <Feather
                                    name='bell'
                                    size={20}
                                    color={focused ? '#004587' : '#000'}
                                />
                            {/* </View> */}
                        </>
                    )

                }}
            />
            <Tab.Screen
                name="Calendario"
                component={Calendario}
                options={{
                    // headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <>
                            {/* <View style={{
                                height: 55,
                                width: 80,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopWidth: 2,
                                borderColor: focused ? '#004587' : 'transparent',
                            }}
                            > */}
                                <Feather
                                    name='calendar'
                                    size={20}
                                    color={focused ? '#004587' : '#000'}
                                />
                            {/* </View> */}
                        </>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabRoutes;
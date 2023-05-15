import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Feather } from '@expo/vector-icons';

import Ionicons from '@expo/vector-icons/Ionicons';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Mensagens from '../../pages/mensagens';
import Contatoss from '../../pages/GerenciamentoMensagens/Contato/Contatos';
import Solicitacoess from '../../pages/GerenciamentoMensagens/Contato/Solicitacoes';

const Tab = createMaterialTopTabNavigator();

function TopTabsContatos() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarInactiveTintColor: '#f8922c',
                tabBarActiveTintColor: 'blue',
                tabBarStyle: {
                    backgroundColor: '#FFF'
                }
            }}
        >
            <Tab.Screen
                name="Contatos"
                component={Contatoss}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Solicitações"
                component={Solicitacoess}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default TopTabsContatos;
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons';

import AppRoutes from './app.routes';

import { useNavigation } from '@react-navigation/native';

import Configuracoes from '../pages/Configuracoes';
import Dashboard from '../pages/Dashboard';
import Badge from '../pages/Badge';
import Notas from '../pages/Notas';
import Mensagens from '../pages/mensagens';
import Calendario from '../pages/Calendario';
import Arquivo from '../pages/Arquivos';
import CursoDetail from '../pages/Dashboard/Curso/CursoDetail';
import BadgeDetails from '../pages/Badge/badgeDetails';
import TopTabs from '../navigations/TopTabs';
import BadgeSearch from '../pages/Badge/BadgeSearch';
import Atividade from '../pages/Dashboard/Curso/CursoDetail/Atividade';
import TopTabsMensagens from '../navigations/TopTabsMensagens';
import TopTabsContatos from '../navigations/TopTabsContatos';
import Chat from '../pages/GerenciamentoMensagens/Chat';
import UcDetails from '../pages/Aprendizagem/UCDetails';
import Notificacao from '../pages/Notificacao';
import SituacoesAprendizagens from '../pages/Aprendizagem/SituacoesAprendizagem';
import ObjetoAprendizagem from '../pages/Aprendizagem/ObjetoAprendizagem';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="BadgesScreem" component={Badge} options={{ headerShown: true }}/> */}
            <Stack.Screen name="DrawerScreem" component={AppRoutes} options={{ headerShown: false }} />
            <Stack.Screen name="NotasScreem" component={Notas} options={{ headerShown: true, title: 'Notas' }} />
            <Stack.Screen name="NotificacaoScreem" component={Notificacao} options={{ headerShown: true, title: 'Notificações' }} />
            <Stack.Screen name="BadgeScreem" component={TopTabs}
                options={{
                    title: 'Badges',
                    headerStyle: {
                        backgroundColor: '#FFF',
                    },
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     color: '#FFF',
                    //     textAlign: 'center'
                    //   },
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => navigation.navigate('BadgeSearchScreem')}
                            >
                                <Feather
                                    name="search"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                            >
                                <Feather
                                    name="plus-circle"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                            >
                                <Feather
                                    name="filter"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                            >
                                <Feather
                                    name="more-vertical"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </>
                    ),
                }}
            />
            <Stack.Screen name="BadgeSearchScreem" component={BadgeSearch}
                options={{
                    headerShown: false,
                    title: '',
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => navigation.navigate('BadgeSearchScreem')}
                            >
                                <Feather
                                    name="search"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                            >
                                <Feather
                                    name="filter"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </>
                    ),

                }}

            />
            <Stack.Screen name="BadgeDetailScreem" component={BadgeDetails} options={{ headerShown: true, title: 'BadgeDetails' }} />
            <Stack.Screen name="ConfiguracaoScreem" component={Configuracoes} options={{ headerShown: true, title: 'Configurações' }} />
            <Stack.Screen name="MensagenScreem" component={TopTabsMensagens} options={{ headerShown: true, title: 'Mensagens' }} />
            <Stack.Screen name="ContatosScreem" component={TopTabsContatos} options={{ headerShown: true, title: 'Contatos' }} />
            <Stack.Screen name="ChatScreem" component={Chat} options={{ headerShown: false, title: 'Mensagens' }} />
            <Stack.Screen name="CalendarioScreem" component={Calendario} options={{ headerShown: true, title: 'Calendario' }} />
            <Stack.Screen name="ArquivoScreem" component={Arquivo} options={{ headerShown: true, title: 'Arquivo' }} />
            <Stack.Screen name="CursoDetailScreem" component={CursoDetail} 
                options={{ 
                    headerShown: true, 
                    title: 'Tarefa',
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                                onPress={() => navigation.navigate('BadgeSearchScreem')}
                            >
                                <Feather
                                    name="search"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </>
                    ),
                }}
            />
            <Stack.Screen name="UcDetailScreem" component={UcDetails} options={{ headerShown: false, title: 'UC' }} />
            <Stack.Screen name="SituacoesAprendizagensScreem" component={SituacoesAprendizagens} options={{ headerShown: false, title: 'Aprendizagens' }} />
            <Stack.Screen name="ObjetoAprendizagenScreem" component={ObjetoAprendizagem} options={{ headerShown: false, title: 'Aprendizagens' }} />
            <Stack.Screen name="AtividadeScreem" component={Atividade} options={{ headerShown: true, title: 'Tarefa' }} />
        </Stack.Navigator>
    );
}

export default StackRoutes;
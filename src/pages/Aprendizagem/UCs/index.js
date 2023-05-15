import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';

import Header from '../../../components/Header';

import { useNavigation } from '@react-navigation/native';
import { api } from '../../../services/api';

import CardCurso from '../../../components/Cards/CardCurso';
import CardModulo from '../../../components/Cards/CardModulo';
import CardUc from '../../../components/Cards/CardUc';
import TopTabsContatos from '../../../navigations/TopTabsContatos';
import FabButton from '../../../components/Buttons/FabButton';

export default function UCs() {
    const navigation = useNavigation();
    const [ucs, setUcs] = useState([]);

    useEffect(() => {
        async function getBadges() {
            try {
                const response = await api.get('/api/unidade-curricular');

                //console.log(JSON.stringify(response.data));

                setUcs(
                    response.data
                );

            } catch (err) {
                console.log(err);
            }
        }
        
        getBadges();
    }, []);

    function navigate() {
        navigation.navigate('BadgeScreem');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                {/* <ScrollView> */}

                    {/* <ScrollView horizontal={true}>
                        <CardModulo name="Módulo 1" />
                        <CardModulo name="Módulo 2" />
                        <CardModulo name="Módulo 3" />
                        <CardModulo name="Módulo 4" />
                        <CardModulo name="Módulo 5" />
                    </ScrollView> */}

                    <FlatList
                        numColumns={2}
                        data={ucs}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CardUc data={item} />}
                    />

                    <FabButton />

                {/* </ScrollView> */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        //backgroundColor: '#000',
    },
    sectionCard: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
})
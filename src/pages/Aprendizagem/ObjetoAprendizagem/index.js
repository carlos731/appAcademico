import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { api } from '../../../services/api';
import HeaderUc from '../../../components/Header/HeaderUc';
import { Feather } from '@expo/vector-icons';
import FormObjeto from '../../../components/Modal/Forms/FormObjeto';
import { CardObjetoAprendizagem } from '../../../components/Cards/CardObjetoAprendizagem';
import { CardAtividade } from '../../../components/Cards/CardAtividade';
import FabButton from '../../../components/Buttons/FabButton';

export default function ObjetoAprendizagem(props) {
  const navigation = useNavigation();

  const [aprendizagem, setAprendizagem] = useState([]);

  const id = props.route.params.id;
  // console.log(id);

  useEffect(() => {
    async function getSituacaoAprendizagem() {
      try {
        const response = await api.get(`/api/situacaoAprendizagem/${id}`);

        // console.log(JSON.stringify(response.data));

        setAprendizagem(
          response.data
        );

      } catch (err) {
        console.log(err);
      }
    }
    
    getSituacaoAprendizagem();
  }, []);

  async function reload(){
    try {
      const response = await api.get(`/api/situacaoAprendizagem/${id}`);

      // console.log(JSON.stringify(response.data));

      setAprendizagem(
        response.data
      );

    } catch (err) {
      console.log(err);
    }
  }

  // console.log(aprendizagem.objetos);
  // console.log(aprendizagem.atividades);

  return (
    <>
      <HeaderUc data={props.route.params.descricao} />

      <View style={styles.container}>

        {/* <ScrollView> */}

          {aprendizagem.objetos !== null && (
            <>
              <View style={styles.contentTitle}>
                <Text style={styles.title}>Objetos de Aprendizagen</Text>
              </View>

              <View>
                <FlatList
                  scrollEnabled={true}
                  horizontal={false}
                  data={aprendizagem.objetos}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <CardObjetoAprendizagem data={item} />}
                />
              </View>
            </>
          )}


          <View style={styles.contentTitle}>
            <Text style={styles.title}>Atividades</Text>
          </View>

          <View>
            <FlatList
              numColumns={1}
              scrollEnabled={false}
              horizontal={false}
              data={aprendizagem.atividades}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CardAtividade data={item} />}
            />
          </View>

          <TouchableOpacity style={{alignSelf: 'center'}}  onPress={() => reload()}>
            <Text>Reload</Text>
          </TouchableOpacity>

          {/* 
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Atividades</Text>
          </View>
          {
            aprendizagem.map((aprendizagens, index) => {
              return (
                <View key={index} style={{ marginBottom: 5 }}>
                  <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={aprendizagens.objetos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CardAtividade data={item} />}
                  />
                </View>
              )
            })
          } */}

          {/* <View style={styles.contentTitle}>
            <Text style={styles.title}>Objetos de Aprendizagen</Text>
          </View>

          <View style={styles.contentTitle}>
            <Text style={styles.title}>Atividades</Text>
          </View>

          <View style={styles.contentTitle}>
            <Text style={styles.title}>Avaliações</Text>
          </View> */}

        {/* </ScrollView> */}
      </View>
      {/* <View style={styles.fabButton} onPress={() => setModalVisible(true)}>
        <FormObjeto id={props.route.params.id} />
      </View> */}
      <FabButton onPress={() => reload()} id={props.route.params.id}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentTitle: {
    width: '95%',
    borderRadius: 50,
    backgroundColor: '#EF8F2F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
    marginTop: 5,
    elevation: 10,
    alignSelf: 'center'
  },
  title: {
    color: 'white',
    fontSize: 15,
    padding: 5
  },
  fabButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    // // borderRadius: 50,
    // width: 60,
    // height: 60,
    // alignItems: 'center',
    // justifyContent: 'center'
    elevation: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
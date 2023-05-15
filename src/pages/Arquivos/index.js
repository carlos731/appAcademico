
import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../../services/api';

const Arquivo = () => {
    const { user } = useContext(AuthContext);
    const { updateProfileImage } = useContext(AuthContext); 

    const [id, setId] = useState(user.id);
    const [photo, setPhoto] = useState(null);
    const [photoShow, setPhotoShow] = useState(null);
    const [usuarioNovo, setUsuarioNovo] = useState();

    const takePhotoAndUpload = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.cancelled) {
            return;
        }

        let localUri = result.uri;
        setPhotoShow(localUri);
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        
        let formData = new FormData();
        formData.append('id', id);
        formData.append('file', { uri: localUri, name: filename, type });

        await api.post('/api/user/updateProfileImage', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then(res => {
          setPhoto(res.data.foto);
          setUsuarioNovo(res.data);
        
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
         } = res.data;

         const data = {
          id, 
          cpf, 
          nomeCompleto, 
          apelido,  
          dataNascimento, 
          telefone,
          foto,
          perfis,
          status
         }
        });

        // console.log(await AsyncStorage.getItem('@usuario'));

        //await AsyncStorage.setItem('@usuario', JSON.stringify(usuarioNovo));

        // await axios.post('http://localhost/api/file-upload', formData, {
        //     headers: { 'Content-Type': 'multipart/form-data' },
        // }).then(res => {
        //     setPhoto(res.data.photo.photo);
        // }).catch(err => {
        //     console.log(err.response);
        // });
    }

    const dicardImage = () => {
        setPhotoShow(null);
    }

    return (
        <View style={styles.mainBody}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Testando upload</Text>
            </View>

            {photoShow &&
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: photoShow }}
                        style={{ width: '100%', height: 350 }}
                    />
                </View>
            }

            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={takePhotoAndUpload}
            >
                <Text style={styles.buttonTextStyle}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={dicardImage}
            >
                <Text style={styles.buttonTextStyle}>Remove Imagen Selecionada</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    },
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth:1,
        borderColor:'#d9d6d6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    titleContainer: {
        alignItems:'center',
        marginBottom:30,
    },
    title: {
        fontSize:23,
        fontWeight:'bold',
    },
});

export default Arquivo;
/*
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Platform, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/AuthContext';

import { api } from '../../services/api';

export default function Arquivo() {
  const { user } = useContext(AuthContext);

  const [id, setId] = useState(user.id);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permisson denied!');
      }
    }
  }, [])

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediatypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    console.log(result);
    if (!result.canceled) {//cancelled
      setImage(result.assets[0].uri);//result.uri
      setFile(result.assets[0]);
    }
  }

  async function updateProfileImage() {
    try {
      const data = new FormData();

      // if(id === '' || image === null){
      //     alert("Preencha todos os campos!");
      //     return;
      // }

      console.log('ID: ' + id);
      console.log('file: ' + file);
      console.log('image: ' + image);

      data.append('id', id);
      data.append('file', file);

      console.log(data);

      await api.post('/api/user/updateProfileImage', data);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View styles={styles.container}>
      <Button title="Choose Image" onPress={PickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <TouchableOpacity onPress={updateProfileImage} >
        <Text>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
*/
/*
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

*/

/*

import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

export default function Upload() {
  const [avatar, setAvatar] = useState();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append("avatar", {
      uri: avatar.uri,
      type: avatar.type
    });

    await Axios.post("http://localhost:3333/files", data);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png"
        }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Enviar imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

*/
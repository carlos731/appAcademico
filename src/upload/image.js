import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {
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
    }

    const dicardImage = () => {
        setPhotoShow(null);
    }

    return (
        <View>
            <TouchableOpacity onPress={takePhotoAndUpload}><Text>IMAGE</Text></TouchableOpacity>
        </View>
    );
}
export default ImageUpload;

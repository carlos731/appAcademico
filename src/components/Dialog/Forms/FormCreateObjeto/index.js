import React, { useState, useEffect, useContext } from "react";
import {
    Provider,
    Stack,
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Text,
    TextInput,
} from "@react-native-material/core";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../../context/AuthContext";
import { api } from "../../../../services/api";

import * as DocumentPicker from 'expo-document-picker';
import DropDownPicker from "react-native-dropdown-picker";

const App = () => {
    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    const [visible, setVisible] = useState(false);

    //Select Dificuldade
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(null);
    const [dificuldades, setDificuldades] = useState([]);

    //Objeto Dados
    const [descricao, setDescricao] = useState('');
    const [file, setFile] = useState([]);
    const [status, setStatus] = useState('');
    const [grauDificuldadeId, setGrauDificuldadeId] = useState('');
    const [usuarioId, setUsuarioId] = useState(user.id);

    useEffect(() => {
        async function getGrauDificudade() {
            try {
                const response = await api.get('/api/grauDificuldade');

                //console.log(JSON.stringify(response.data));

                setDificuldades(
                    response.data
                );

                // console.log(response.data);

            } catch (err) {
                console.log(err);
            }
        }

        getGrauDificudade();
    }, []);

    async function getFiles() {
        let result = await DocumentPicker.getDocumentAsync({});

        setFile(result);
        console.log(file.mimeType);
        result = null;
        
        console.log(dificuldades);
    }

    const uploadObjeto = async () => {

        if (file.cancelled) {
            return;
        }

        let localUri = file.uri;
        // setFile(localUri);
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `DocumentPicker/${match[1]}` : `DocumentPicker`;

        let formData = new FormData();
        formData.append('descricao', descricao);
        formData.append('file', { uri: localUri, name: filename, type });
        formData.append('grauDificuldadeId', grauDificuldadeId);
        formData.append('usuarioId', usuarioId);

        await api.post('/api/objetoAprendizagem/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        setVisible(false);
        navigation.navigate("CursoDetailScreem");
    }

    const items = [
        {
            label: "dancing", value: "1"
        }
    ]

    return (
        <>
            <Button
                title="Open Create Object"
                style={{ margin: 16 }}
                onPress={() => setVisible(true)}
            />
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <DialogHeader title="Objeto Aprendizagem" />
                <DialogContent>
                    <Stack spacing={2}>
                        <Text>Descrição:</Text>
                        <TextInput label="" variant="outlined" value={descricao} onChangeText={setDescricao} />
                        <Text>Grau dificuldade:</Text>
                        <TextInput label="" variant="outlined" value={grauDificuldadeId} onChangeText={setGrauDificuldadeId} />
                        <DropDownPicker 
                            items={items}
                            open={isOpen}
                            setOpen={() => setIsOpen(!isOpen)}
                            value={currentValue}
                            setValue={(value) => setCurrentValue(value)}
                            maxHeight={200}
                            autoScroll

                            placeholder="Dificuldade"
                        />
                        <Button style={{ marginTop: 5 }} title="arquivo" onPress={() => getFiles()} />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        title="Cancel"
                        compact
                        variant="text"
                        onPress={() => setVisible(false)}
                    />
                    <Button
                        title="cadastrar"
                        compact
                        variant="text"
                        onPress={() => uploadObjeto()}
                    />
                </DialogActions>
            </Dialog>
        </>
    );
};

const FormCreateObjeto = () => (
    <Provider>
        <App />
    </Provider>
);

export default FormCreateObjeto;
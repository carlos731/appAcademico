import React, { useState } from "react";
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

const App = () => {
  const [visible, setVisible] = useState(false);

  //badgeNivel
  const [badgeNivel, setBadgeNivel] = useState([]);

  //badge
  const [descricao, setDescricao] = useState('');
  const [img, setImg] = useState([]);
  const [badgeNivelId, setBadgeNivelId] = useState('');

  async function pickDocument() {
    let result = await DocumentPicker.getDocumentAsync({});

    setFile(result);
    console.log(file.mimeType);
    result = null;
  }

  return (
    <>
      <Button
        title="Create Badge"
        style={{ margin: 16 }}
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Cadastro de Badge" />
        <DialogContent>
          <Stack spacing={2}>
            <Text>Descrição:</Text>
            <TextInput label="" variant="standard" value={descricao} onChangeText={setDescricao} />
            <Text>Níveis:</Text>
            <TextInput label="" variant="standard" value={badgeNivelId} onChangeText={setBadgeNivelId} />
            <Button style={{ marginTop: 5 }} title="arquivo" onPress={() => pickDocument()} />
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
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const FormCreateBadge = () => (
  <Provider>
    <App />
  </Provider>
);

export default FormCreateBadge;
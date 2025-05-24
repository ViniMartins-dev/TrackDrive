import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TextInput, Button } from 'react-native';
/*import { updateCripto } from './Api';*/
import { StatusBar } from 'expo-status-bar';

export default function Atualizar({ navigation, route }) {
  /* Descomente quando quiser ativar os dados da cripto recebidos pela navegação */
  // const { cripto } = route.params;
  // const [nomeCripto, setNomeCripto] = useState(cripto.nomeCripto);
  // const [siglaCripto, setSiglaCripto] = useState(cripto.siglaCripto);

  const handleUpdate = () => {
    /* Descomente quando quiser montar os dados atualizados */
    // const updatedData = {
    //   nomeCripto,
    //   siglaCripto,
    // };

    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja alterar esse registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Alterar',
          // Descomente a linha abaixo quando quiser executar o updateCripto
          // onPress: () => updateCripto(cripto, updatedData, navigation),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar</Text>
      <View style={styles.line} />

    <View style={styles.forms}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Cripto"
        /* value={nomeCripto}
        onChangeText={setNomeCripto} */
      />
      <TextInput
        style={styles.input}
        placeholder="Sigla da Cripto"
        /* value={siglaCripto}
        onChangeText={setSiglaCripto} */
      />
    </View>

      <View style={styles.button}>
        <Button title="Salvar Alterações" color="#007AFF" onPress={handleUpdate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A9FF',
    padding: 20,
  },
  title: {
    top: 60,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
  },
  line: {
    top: 80,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    marginTop: 150,
    backgroundColor: '#0066cc',
    borderRadius: 10,
    color: 'black',
    overflow: 'hidden',
  },
  forms: {
    top: 130,
  }
});

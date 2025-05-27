import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Cadastro({ navigation }) {
   const [nomeCar, setNomeCar] = useState('');
   const [siglaCar, setSiglaCar] = useState('');

  const handleCadastro = () => {
    if (!nomeCar || !siglaCar) {
      alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmação',
      'Deseja cadastrar essa nova cripto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Cadastrar',
          onPress: () => {
            const newCar = { nome: nomeCar, sigla: siglaCar};
            createCar(newCar, navigation);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.line} />

    <View style={styles.forms}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Cripto"
        value={nomeCar}
        onChangeText={setNomeCar}
      />
      <TextInput
        style={styles.input}
        placeholder="Sigla da Cripto"
        value={siglaCar}
        onChangeText={setSiglaCar}
      />
      </View>

      <View style={styles.button}>
        <Button title="Cadastrar Cripto" color="#007AFF" onPress={handleCadastro} />
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

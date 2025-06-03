import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { createCar } from './Api';

export default function Cadastro({ navigation }) {
  const [modelCar, setmodelCar] = useState('');
  const [montaCar, setmontaCar] = useState('');
  const [anoCar, setanoCar] = useState('');
  const [corCar, setcorCar] = useState('');
  const [placaCar, setplacaCar] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCadastro = () => {
    if (!modelCar.trim() || !montaCar.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmação',
      'Deseja cadastrar esse novo veículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Cadastrar',
          onPress: () => enviarCadastro(),
        },
      ]
    );
  };

  const enviarCadastro = async () => {
    setLoading(true);

    const newCar = {
      modelo: modelCar,
      montadora: montaCar,
      ano: Number(anoCar),
      cor: corCar,
      placa: placaCar,
    };

    try {
      await createCar(newCar, navigation);
      setmodelCar('');
      setmontaCar('');
      setanoCar('');
      setcorCar('');
      setplacaCar('');
    } catch (error) {
      Alert.alert('Erro ao cadastrar', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

    <View style={styles.contforms}>
      <View style={styles.forms}>
        <TextInput
          style={styles.input}
          placeholder="Modelo"
          value={modelCar}
          onChangeText={setmodelCar}
          editable={!loading}
          placeholderTextColor="#8e8e93"
        />
        <TextInput
          style={styles.input}
          placeholder="Montadora"
          value={montaCar}
          onChangeText={setmontaCar}
          editable={!loading}
          placeholderTextColor="#8e8e93"
        />
        <TextInput
          style={styles.input}
          placeholder="Ano"
          keyboardType="numeric"
          value={anoCar}
          onChangeText={setanoCar}
          editable={!loading}
          placeholderTextColor="#8e8e93"
          maxLength={4}
        />
        <TextInput
          style={styles.input}
          placeholder="Cor"
          value={corCar}
          onChangeText={setcorCar}
          editable={!loading}
          placeholderTextColor="#8e8e93"
        />
        <TextInput
          style={styles.input}
          placeholder="Placa"
          value={placaCar}
          onChangeText={setplacaCar}
          editable={!loading}
          placeholderTextColor="#8e8e93"
        />
      </View>
    </View>

      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#007AFF" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleCadastro} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Cadastrar Veículo</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7', // cor clara iOS
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginTop: 15,
  },
  line: {
    height: 1,
    backgroundColor: '#c7c7cc',
    marginBottom: 30,
  },
  forms: {
    marginTop: 80,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 17,
    color: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    height: 44,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});

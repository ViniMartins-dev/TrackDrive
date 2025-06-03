import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { updateCar } from './Api'; // sua função updateCar
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';



export default function Atualizar({ navigation, route }) {
  const [modelCar, setmodelCar] = useState('');
  const [montaCar, setmontaCar] = useState('');
  const [anoCar, setanoCar] = useState('');
  const [corCar, setcorCar] = useState('');
  const [placaCar, setplacaCar] = useState('');
  const [statusCar, setstatusCar] = useState('');
  const [loading, setLoading] = useState(false);

  // Guarda o id do veículo para atualizar
  const [id, setId] = useState(null);

  useEffect(() => {
    if (route.params?.veiculo) {
      const v = route.params.veiculo;
      setmodelCar(v.modelo);
      setmontaCar(v.montadora);
      setanoCar(String(v.ano));
      setcorCar(v.cor);
      setplacaCar(v.placa);
      setstatusCar(v.status);
      setId(v.id);
    }
  }, [route.params]);

  const handleAtualizar = () => {
    if (!modelCar.trim() || !montaCar.trim()) {
      Alert.alert('Erro', 'Preencha os campos Modelo e Montadora');
      return;
    }

    Alert.alert(
      'Confirmação',
      'Deseja atualizar esse veículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Atualizar',
          onPress: () => enviarAtualizacao(),
        },
      ]
    );
  };

  const enviarAtualizacao = async () => {
  setLoading(true);

  const updatedCar = {
    modelo: modelCar,
    montadora: montaCar,
    ano: Number(anoCar),
    cor: corCar,
    placa: placaCar,
    status: statusCar,
    id: id,
  };

  try {
    await updateCar(id, updatedCar, navigation);

    // Emite evento para avisar que atualizou
    navigation.navigate('Home', { updatedCar });  // ou só volta para home, sem params

  } catch (error) {
    Alert.alert('Erro ao atualizar', error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar Veículo</Text>

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
        <TextInput
          style={styles.input}
          placeholder="Status"
          value={statusCar}
          onChangeText={setstatusCar}
          editable={!loading}
          placeholderTextColor="#8e8e93"
        />
      </View>

      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#007AFF" />
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={handleAtualizar}
            disabled={loading}
          >
            <Icon name="edit" size={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
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
  forms: {
    marginTop: 50,
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
    marginTop: 30,
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

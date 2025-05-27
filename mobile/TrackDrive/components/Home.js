import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { fetchCar, deleteCar } from '../components/Api';

export default function Home({ navigation }) {
  const [registro, setRegistros] = useState([]);

  useEffect(() => {
    fetchCar(setRegistros);
  }, []);

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja deletar esse registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          onPress: () => {
            const novosRegistros = registro.filter(item => item.codigo !== id);
            setRegistros(novosRegistros);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        GERENCIAMENTO DE VEÍCULOS
      </Text>
      <View style={styles.line} />
      <StatusBar style="light" />
      <FlatList
        style={styles.list}
        data={registro}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              Cripto: {item.sigla} - Sigla: {item.nome}
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => handleDelete(item.codigo)}
              >
                <Icon name="trash" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() => navigation.navigate('Alterar', { book: item })}
              >
                <Icon name="edit" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A9FF',
    padding: 16,
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
    borderColor: 'white'
},
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  editButton: {
    backgroundColor: '#2ecc71',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 50,
    elevation: 5,
  },
  list: {
    marginTop: 100,
  }
});
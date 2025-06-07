import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { fetchCar, deleteCar, rentCar } from '../components/Api';
import { useFocusEffect } from '@react-navigation/native';


export default function Home({ navigation }) {
  const [registro, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      await fetchCar(setRegistros);
    } catch (err) {
      if (!error.response.status === 404) {
        setError('Erro ao carregar os dados. Verifique a conexão com a API.');
      }
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Carregar dados toda vez que a tela ficar ativa (após atualizar)
      loadData();
    }, [])
  );


  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja deletar esse registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          onPress: () => deleteCar(id, setRegistros, registro),
          style: 'destructive',
        },
      ]
    );
  };

  const handleRent = (id, status) => {
  if (status === 'disponivel') {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja alugar esse carro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Alugar',
           onPress: async () => {
              await rentCar(id);
              //fazer dar refresh na home
           }
        },
      ]
    );
  } else if (status === 'alugado') {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja devolver esse carro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Devolver',
          onPress: () => rentCar(id),
          //refresh da home
        },
      ]
    );
  }
};


  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadData}>
          <Text style={styles.retryButtonText}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (registro.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Veículos</Text>
        <StatusBar style="dark" />
        <Text style={styles.emptyText}>Nenhum veículo cadastrado.</Text>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('Cadastro')}
          activeOpacity={0.7}
        >
          <Icon name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veículos Cadastrados</Text>
      <StatusBar style="dark" />
      <FlatList
        style={styles.list}
        data={registro}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              Modelo: {item.modelo}
            </Text>
            <Text style={styles.itemText}>
              Montadora: {item.montadora}
            </Text>
            <Text style={styles.itemText}>
              Ano: {item.ano}
            </Text>
            <Text style={styles.itemText}>
              Cor: {item.cor}
            </Text>
            <Text style={styles.itemText}>
              Placa: {item.placa}
            </Text>
            <Text style={styles.itemText}>
              Status: {item.status}
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.rentButton]}
                onPress={() => handleRent(item.id, item.status)}
                activeOpacity={0.7}
              >
                <Text style={[styles.rentText]}>{item.status === 'alugado' ? 'Devolver' : 'Alugar'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => handleDelete(item.id)}
                activeOpacity={0.7}
              >
                <Icon name="trash" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() =>
                  navigation.navigate('Atualizar', {
                    veiculo: item,
                    onGoBack: (updatedVehicle) => {
                      setRegistros((prev) =>
                        prev.map(v => (v.id === updatedVehicle.id ? updatedVehicle : v))
                      );
                    },
                  })
                }
                activeOpacity={0.7}
              >
                <Icon name="edit" size={20} color="#fff" />
              </TouchableOpacity>
              <Icon name="edit" size={20} color="#fff" />
            </View>
          </View>
        )
        }
      />
      < TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Cadastro')}
        activeOpacity={0.7}
      >
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7', // fundo típico iOS
    padding: 20,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 60,
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 12,
    color: '#8e8e93',
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#ff3b30', // vermelho iOS
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyText: {
    marginTop: 120,
    fontSize: 18,
    color: '#8e8e93',
    textAlign: 'center',
  },
  list: {
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 6,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 12,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#ff3b30', // vermelho típico iOS para apagar
  },
  editButton: {
    backgroundColor: '#34c759', // verde típico iOS para editar
  },
  rentButton: {
    backgroundColor: '#FFA500',
  },
  rentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
});

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { db } from '../components/Firebase';
import { getDoc, doc } from 'firebase/firestore';

export default function Perfil({ user, setUser }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      console.log('UID do usuário:', user.user.uid);
      try {
        const docRef = doc(db, 'usuario', user.user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('Nenhum documento encontrado para esse usuário');
        }
      } catch (error) {
        console.log('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Carregando dados do usuário...</Text>
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Usuário não encontrado.</Text>
      </View>
    );
  }

  const handleLogout = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          onPress: () => {
            setUser(null);
          },
        },
      ]
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>

        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/car.png')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>{userData.name || 'Nome não definido'}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{userData.email || 'Email não definido'}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Uid</Text>
            <Text style={styles.value}>{user.user.uid}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>URL</Text>
            <Text style={styles.value}>{userData.imageURL}</Text>
          </View>

          {userData.bio ? (
            <View style={styles.infoBox}>
              <Text style={styles.label}>Bio</Text>
              <Text style={styles.value}>{userData.bio}</Text>
            </View>
          ) : null}
        </View>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF3B30' }]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Seu StyleSheet pode continuar igual
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    marginBottom: 30,
  },
  profileImageContainer: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#d1d1d6',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 5,
  },
  value: {
    fontSize: 17,
    color: '#000',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 4,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

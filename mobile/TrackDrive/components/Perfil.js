import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { auth } from '../components/Firebase'; 

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando dados do usuário...</Text>
      </View>
    );
  }

  return (
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
          <Text style={styles.value}>
            {user.displayName ? user.displayName : 'Nome não definido'}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

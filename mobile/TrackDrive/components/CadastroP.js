import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../components/Firebase';

export default function CadastroP({ navigation, setUser }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [nome, setNome] = useState('');

  const handleCadastro = async () => {
    if (!email || !senha || !confSenha || !nome) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (senha !== confSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Usuário cadastrado!');
      const user = userCredential.user;
      setUser(user);

      await setDoc(doc(db, 'usuario', user.uid), {
      name: nome,
      email: email,
      imageURL: "",
      createdAt: new Date(),
    });
    } catch (error) {
      Alert.alert('Erro ao cadastrar', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.track}>TRACK</Text>
      <Text style={styles.drive}>DRIVE</Text>

      <Image
        source={require('../assets/carnew.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.forms}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#8e8e93"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#8e8e93"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confSenha}
          onChangeText={setConfSenha}
          placeholderTextColor="#8e8e93"
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#8e8e93"
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  track: {
    fontSize: 40,
    fontWeight: '700',
    color: '#000',
  },
  drive: {
    fontSize: 40,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  forms: {
    width: '80%',
  },
  input: {
    backgroundColor: '#f1f1f1',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#007AFF',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

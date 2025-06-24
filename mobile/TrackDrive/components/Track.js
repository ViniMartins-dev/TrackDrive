import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/Firebase';

export default function Track({ navigation, setUser }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Login efetuado!');
      setUser('usuario123'); // isso já muda as rotas
    } catch (error) {
      Alert.alert('Erro no login', error.message);
    }
  };

  return (
    <View style={styles.container}>
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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CadastroP')}>
          <Text style={styles.registerText}>
            Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a97de',
    paddingHorizontal: 20,
  },
  track: {
    fontSize: 60,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 160,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1.5,
  },
  drive: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1.5,
  },
  image: {
    marginLeft: 50,
    width: 300,
    height: 100,
    justifyContent: 'center',
    marginTop: 30,
  },
  forms: {
    marginTop: 60,
  },
  input: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#005BBB',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});

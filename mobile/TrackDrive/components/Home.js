import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
/*import {fetchApi, deleteApi} from './Api'/*/
import Icon from 'react-native-vector-icons/FontAwesome'
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {
    const [registro, setRegistros] = useState([]);

    /*useEffect(() => {
        fetchCripto(setRegistros);
    }, []);    
    
    const HandleDelete = (id) => {
        Alert.alert(
        'Confirmação',
        'Tem certeza de que deseja deletar esse registro?',
    [
       {text: 'Cancelar', style: 'cancel'},
       {text: 'Deletar', onPress: ()=>deleteCripto(id, setRegistros),},

       ]
    );*/

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                GERENCIAMENTO DE VEÍCULOS
            </Text>
            <View style={styles.line}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47A9FF',
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
    button: {
        top: 10,
    }

})
import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
/*import {fetchApi, deleteApi} from './Api'/*/
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Track({ navigation }) {
    /*const [registro, 
    
    setRegistro = useState([])];

    useEffect(() => {
        fetchCripto(setRegistro);
    }, []);
    
    const HandleDelete = (id) => {
        Alert.alert(
        'Confirmação',
        'Tem certeza de que deseja deletar esse registro?',
    [
       {text: 'Cancelar', style: 'cancel'},
       {text: 'Deletar, onPress:()=>deleteCripto(id, setRegistros),
       },

       ]/*/
    /*);*/

    /*}*/

    return (
        <View style={styles.container}>
            <Text style={styles.track}>
                TRACK
            </Text>
            <Text style={styles.drive}>
                DRIVE
            </Text>
            <Image
                source={require('../assets/carnew.png')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a97de',
    },
    track: {
        fontSize: 80,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 70,
        textShadowColor: 'rgba(0, 0, 0, 0.25)', // sombra preta translúcida
        textShadowOffset: { width: 0, height: 1 }, // sombra sutil pra baixo
        textShadowRadius: 1.5, // desfoque leve

    },
    drive: {
        fontSize: 50,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)', // sombra preta translúcida
        textShadowOffset: { width: 0, height: 1 }, // sombra sutil pra baixo
        textShadowRadius: 1.5, // desfoque leve

    },
    image: {
        marginLeft: 10,
        width: 500,
        height: 200,
        justifyContent: 'center',
        marginTop: 130
    },
    button: {
        backgroundColor: '#005BBB',
        padding: 13,
        borderRadius: 5,
        marginTop: 20,
        width: 100,
        height: 50,
    },
    buttoncontent: {
        color: "white",
        fontWeight: 800,
        fontSize: 18,
    }
})
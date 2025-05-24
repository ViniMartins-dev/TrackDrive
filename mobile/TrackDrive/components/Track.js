import React, { useState, UseEffect } from 'react';
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
                Track
            </Text>
            <Text style={styles.drive}>
                Drive
            </Text>
            <Image
                source={require('../assets/car.png')}
                style={styles.image}
            />
            <Button
                title="INICIAR"
                onPress={() => navigation.navigate('Home')}
                color="#007AFF"
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47A9FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    track: {
        fontSize: 50,
        color: 'white',
        fontWeight: '700',

    },
    drive: {
        fontSize: 30,
        color: 'white',
        fontWeight: '700',
    },
    image: {
        width: 250,
        height: 200,
    }
})
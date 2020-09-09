import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ItemList from './ItemList';

class Bag extends React.Component {

    render() {
        return (
            <View style={styles.center}> 
                <Text style={styles.titulo}>PROXIMAMENTE</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    center:{
        display: "flex",
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)',
        alignSelf: 'center',
        margin: 20,
    }
})
export default Bag;
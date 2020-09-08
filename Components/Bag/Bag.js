import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ItemList from './ItemList';

class Bag extends React.Component {

    render() {
        return (
            <View style={styles.center}> 
                <Text style={styles.coming}>PROXIMAMENTE</Text>
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
    coming: {
        fontSize: 24,
        alignSelf: 'center'
    }
})
export default Bag;
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Item from './Item';

class ItemList extends React.Component{
    
    render(){
        const items= [
            {
                "id":0,
                "description":"Protector solar"
            },
            {
                "id":1,
                "description":"Toalla"
            },
            {
                "id":2,
                "description":"Gorro"
            },
            {
                "id":3,
                "description":"Tarjetas y dinero"
            }
        ]
        
        return(
            <View style={styles.center}>
                <Text style={styles.title}>LISTOS PARA VIAJAR?</Text>
                <Text style={styles.subTitle}>Te ayudamos a artmar la valija!</Text>
                <FlatList
                        horizontal={false}
                        data={items}
                        renderItem={listItem => {
                            const item = listItem.item;
                            return <Item key={item.id} description={item.description}></Item>
                        }}
                    />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    center: {
        display: 'flex',
        flex: 1,
    },
    title: {
        fontSize: 26,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center'
    }
})


export default ItemList;
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import { Link } from 'react-router-native';

class ListDays extends React.Component {

    render() {
        const info = [
            { id: 0, day: "Jueves 14 de Julio" },
            { id: 1, day: "Viernes 15 de Julio" },
            { id: 2, day: "Sabado 16 de Julio" },
            { id: 3, day: "Domingo 17 de Julio" }
        ]
        return (
            <View style={styles.container}>
                <FlatList
                    data={info}
                    renderItem={listItem => {
                        const item = listItem.item;
                        return (
                            <Link to={"/calendar/" + info.id} component={TouchableOpacity}>
                                <Card>
                                    <Card.Title>{item.day}</Card.Title>
                                </Card>
                            </Link>
                        )
                    }}>
                </FlatList>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    }
})
export default ListDays;
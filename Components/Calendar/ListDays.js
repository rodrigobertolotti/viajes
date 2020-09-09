import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-elements'
import { Link } from 'react-router-native';
import Calendar from './Calendar';

class ListDays extends React.Component {

    state = {
        id: -1
    }

    componentDidMount() {
        info = [
            {
                "id":"0",
                "date": "Jueves 15 de Julio",
                "descriptionAM": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "descriptionPM": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "imageAM": "https://wallpaperaccess.com/full/1260643.jpg",
                "imagePM": "https://www.mordeo.org/files/uploads/2018/04/Empire-State-Building-New-York-City-HD-Mobile-Wallpaper.jpg",
            },
            {
                "id":"1",
                "date": "Viernes 16 de Julio",
                "descriptionAM": "En la mañana visitamos el Central Park, haremos un picnic hasta las 2 de la tarde. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "descriptionPM": "Visitaremos el edificio One World y luego iremos a cenar a Bubba Gump. Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "imageAM": "https://www.jakpost.travel/wimages/large/197-1970053_central-park.jpg",
                "imagePM": "https://mobilehd.blob.core.windows.net/main/2016/11/nyc-skyscraper-center-street-1280x1920.jpg",
            },
            {
                "id":"2",
                "date": "Sabado 17 de Julio",
                "descriptionAM": "En la mañana visitamos Wall Street. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "descriptionPM": "Visitaremos el edificio One World y luego iremos a cenar a Bubba Gump. Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "imageAM": "https://i.pinimg.com/736x/b4/ca/b6/b4cab6959d8323b3d01c1f0f4d42676c.jpg",
                "imagePM": "https://mobilehd.blob.core.windows.net/main/2016/11/nyc-skyscraper-center-street-1280x1920.jpg",
            },
        ]
        //This array will be replaced with real data extracted from an API.
        this.setState({
            id: -1,
            data: info,
            day: []
        })
    }

    showCalendar = (id) => {
        this.setState({
            id: id,
            day: this.state.data[id]
        })
    }

    comeBack = () => {
        this.setState({
            id: -1
        })
    }


    render() {
        return (
            <>
                {this.state.id === -1 ?
                    <View style={styles.container}>
                        <Text style={styles.titulo}>CRONOGRAMA DE VIAJE</Text>
                        <FlatList
                            data={this.state.data}
                            renderItem={listItem => {
                                const item = listItem.item;
                                return (
                                    <TouchableOpacity onPress={() => this.showCalendar(item.id)}>
                                        <Card>
                                            <Card.Title>{item.date}</Card.Title>
                                        </Card>
                                    </TouchableOpacity>
                                )
                            }}>
                        </FlatList>
                    </View >
                    :
                    <Calendar
                         data={this.state.day}
                         comeBack={() => this.comeBack()}></Calendar>
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)',
        alignSelf: 'center',
        margin: 20,
    }
})
export default ListDays;
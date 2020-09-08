import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';

class Calendar extends React.Component {

    state = {
    }

    componentDidMount(){
        this.setState({
            manana: true,
            imagen: 'https://wallpaperaccess.com/full/1260643.jpg',
            descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        })
    }
    cambiarMomento = () => {
        let img = "";
        let descripcion = " ";
        let actual = this.state.manana;
        if (!this.state.manana){
            img = 'https://wallpaperaccess.com/full/1260643.jpg';
            descripcion= 'HLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
        }else{
            img = 'https://www.mordeo.org/files/uploads/2018/04/Empire-State-Building-New-York-City-HD-Mobile-Wallpaper.jpg';
            descripcion= 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        }
        this.setState({
            imagen: img,
            manana: !actual,
            descripcion: descripcion
        })
        
    }

    render() {

        return (
            <Momento
                dia="Jueves 15 de Junio"
                descripcion={this.state.descripcion}
                imagen={this.state.imagen}
                onClick={() => this.cambiarMomento()}
                manana={this.state.manana}
            ></Momento>
        )
    }
}

export default Calendar;

function Momento(props) {
    const image = { uri: props.imagen };
    let momento= "";
    props.manana ? momento= " - AM" : momento= " - PM";  
    return (
        <ImageBackground source={image} style={styles.fondo}>
            <View style={styles.column}>
                <View style={styles.row}>

                </View>
                <View style={styles.row}>
                    <View style={styles.boxTitulo}>
                        <Text style={styles.titulo}>
                            {props.dia} {momento}
                        </Text>
                    </View>
                    <View style={styles.boxDescripcion}>
                        <Text style={styles.descripcion}>
                            {props.descripcion}
                        </Text>
                    </View>
                    <View style={styles.boxBotones}>
                        <View style={styles.rowBoton}></View>
                        <View style={styles.rowBoton}>
                            <View style={styles.containerBoton}>
                                <TouchableOpacity
                                    disabled={props.manana}
                                    onPress={props.onClick}
                                    style={styles.boton}>
                                    <Text style={styles.textoBoton}>
                                        MAÑANA
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.containerBoton}>
                                <TouchableOpacity
                                    disabled={!props.manana}
                                    onPress={props.onClick}
                                    style={styles.boton}>
                                    <Text style={styles.textoBoton}>
                                        TARDE
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    fondo: {
        height: '100%',
        width: '100%'
    },
    column: {
        display: 'flex',
        flex: 1
    },
    row: {
        flexDirection: 'column',
        flex: 1,
    },
    titulo: {
        fontSize: 28,
        color: 'white',
        marginLeft: 20,
    },
    descripcion: {
        fontSize: 16,
        color: 'white',
        margin: 10
    },
    boxTitulo: {
        flex: 1,
    },
    boxBotones: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxDescripcion: {
        flex: 3
    },
    boton: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '80%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    },
    textoBoton: {
        fontSize: 12,
        color: 'black'
    },
    rowBoton: {
        flex: 1,
        flexDirection: 'row'
    },
    containerBoton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
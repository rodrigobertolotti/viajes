import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

class CardsCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    text: "Recuerda que se pueden llevar y traer hasta dos valijas de hasta 23 kg!",
                    image: "https://img.favpng.com/6/8/20/suitcase-baggage-scalable-vector-graphics-icon-png-favpng-jnES3cU1i8CLwfV3EVCNV9Dgy.jpg"
                },
                {
                    text: "Llevar chicles para el despegue del avion. La presion hace que se te tapen los oídos.",
                    image: "https://icon-library.com/images/air-plane-icon/air-plane-icon-8.jpg"
                },
                {
                    text: "Recuerda llevar la menor cantidad de dinero en efectivo posible. Utilizar la tarjeta MIDINERO que provee la empresa. ",
                    image: "https://img.icons8.com/plasticine/2x/money.png"
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        const image=item.image;
        return (
            <View style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 250,
                padding: 20,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Image
                        source={{uri: image}}
                        style={styles.suitcase}
                    ></Image>
                <Text style={styles.text}>{item.text}</Text>
            </View>

        )
    }

    render() {
        return (
            <>
                <Text style={styles.titulo}>RECOMENDACIONES</Text>
                <View style={styles.background}>
                    <Carousel
                        layout={"stack"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)',
        alignSelf: 'center',
        margin: 20,
        marginBottom: 30
    },
    suitcase: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 10
    },
    titleRec: {
        fontSize: 20,
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        marginTop: 20,
        alignSelf: 'center'
    }
})

export default CardsCarousel;
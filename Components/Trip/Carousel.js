import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
class CardsCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    text: "Recuerda que se pueden llevar y traer hasta dos valijas de hasta 23 kg!",
                    image: "https://images.vexels.com/media/users/3/128931/isolated/preview/c8701214b16da5fc13b83946691e8b27-travel-bag-icon-by-vexels.png"
                },
                {
                    text: "Llevar chicles para el despegue del avion. La presion hace que se te tapen los oídos.",
                    image: "https://icon-library.com/images/air-plane-icon/air-plane-icon-8.jpg"
                },
                {
                    text: "Recuerda llevar la menor cantidad de dinero en efectivo posible. Utilizar la tarjeta MIDINERO de empresa. ",
                    image: "https://img.icons8.com/plasticine/2x/money.png"
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        const image = item.image;
        let color='';
        index % 2 === 0 ? color= "#2972b6" : color="#4ebcff";
        return (
            <View style={{
                backgroundColor: 'white',
                height: 250,
                padding: 20,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={[color, 'white']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 150,
                    }}
                />
                <Text style={styles.tipText}>TIP {index + 1}</Text>
                <Image
                    source={{ uri: image }}
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
                        layout={"default"}
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
        fontSize: 14,
        marginTop: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tipText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-start',
    }
})

export default CardsCarousel;
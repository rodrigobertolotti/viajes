import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';

class Calendar extends React.Component {

    state = {
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            morning: true,
            date: this.props.data.date,
            image: this.props.data.imageAM,
            description: this.props.data.descriptionAM
        })
    }
    cambiarMomento = () => {
        let img = "";
        let description = " ";
        let actual = this.state.morning;
        if (!this.state.morning) {
            img = this.props.data.imageAM;
            description = this.props.data.descriptionAM;
        } else {
            img = this.props.data.imagePM;
            description = this.props.data.descriptionPM;
        }
        this.setState({
            image: img,
            morning: !actual,
            description: description
        })

    }

    render() {

        return (
            <Momento
                day={this.state.date}
                description={this.state.description}
                image={this.state.image}
                onClick={() => this.cambiarMomento()}
                morning={this.state.morning}
                comeBack={this.props.comeBack}
            ></Momento>
        )
    }
}

export default Calendar;

function Momento(props) {
    const image = { uri: props.image };
    let moment = "";
    props.morning ? moment = " - AM" : moment = " - PM";
    return (
        <ImageBackground source={image} style={styles.background}>
            <View style={styles.column}>

                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={props.comeBack}
                        style={styles.comeBackButton}>
                        <Text style={styles.buttonBackText}>
                            VOLVER
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.title}>
                            {props.day} {moment}
                        </Text>
                    </View>
                    <View style={styles.boxDescription}>
                        <Text style={styles.description}>
                            {props.description}
                        </Text>
                    </View>
                    <View style={styles.boxButtons}>
                        <View style={styles.rowbutton}></View>
                        <View style={styles.rowbutton}>
                            <View style={styles.containerbutton}>
                                <TouchableOpacity
                                    disabled={props.morning}
                                    onPress={props.onClick}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        MAÑANA
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.containerbutton}>
                                <TouchableOpacity
                                    disabled={!props.morning}
                                    onPress={props.onClick}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>
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
    background: {
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
    title: {
        fontSize: 28,
        color: 'white',
        marginLeft: 20,
    },
    description: {
        fontSize: 16,
        color: 'white',
        margin: 10
    },
    boxTitle: {
        flex: 1,
    },
    boxButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxDescription: {
        flex: 3
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '80%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    },
    buttonText: {
        fontSize: 12,
        color: 'black'
    },
    rowbutton: {
        flex: 1,
        flexDirection: 'row'
    },
    containerbutton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comeBackButton: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '20%',
        height: '10%',
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    buttonBackText: {
        fontSize: 16
    }
})
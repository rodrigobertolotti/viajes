import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        // update every second
        this.interval = setInterval(() => {
            const date = this.calculateCountdown("2020-10-10");
            date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0,
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        const countDown = this.state;

        return (
            <View style={styles.general}>
                <View style={styles.divCountdown}>
                    <View style={styles.divViaje}>
                        <Text style={styles.viaje}>USA 20'</Text>
                    </View>
                    <View style={styles.divTimer}>
                        <View style={styles.timerBox}>
                            <Text style={styles.cantidad}>{this.addLeadingZeros(countDown.days)}</Text>
                            <Text style={styles.medida}>
                                DIAS
                </Text>
                        </View>
                        <View style={styles.timerBox}>
                            <Text style={styles.cantidad}>{this.addLeadingZeros(countDown.hours)}</Text>
                            <Text style={styles.medida}>HORAS</Text>
                        </View>
                        <View style={styles.timerBox}>
                            <Text style={styles.cantidad}>{this.addLeadingZeros(countDown.min)}</Text>
                            <Text style={styles.medida}>MIN</Text>
                        </View>
                        <View style={styles.timerBox}>
                            <Text style={styles.cantidad}>{this.addLeadingZeros(countDown.sec)}</Text>
                            <Text style={styles.medida}>SEG</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.divStich}>
                    <Image
                        source={require('../../Imagenes/stich.png')}
                        style={styles.stich}
                    ></Image>
                </View>
                <View>

                </View>
                <View style={styles.espacio}></View>
            </View>
        );
    }
}


Countdown.defaultProps = {
    date: new Date()
};

const styles = StyleSheet.create({
    general: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    divStich: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    stich: {
        width: 120,
        height: 160,
        marginRight: 30
    },
    divCountdown: {
        marginTop: 20,
        flex: 2,
        borderRadius: 15,
        padding: 10
    },
    divViaje: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    viaje: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)'
    },
    divTimer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    timerBox: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cantidad: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2972b6'
    },
    medida: {
        fontSize: 10,
        fontWeight: 'bold'
    }

})

export default Countdown;
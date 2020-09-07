import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Bag from './Components/Bag/Bag';
import Calendar from './Components/Calendar/Calendar';
import Trip from './Components/Trip/Trip';

class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <NativeRouter>
        <View style={styles.body}>
          <Switch>
            <Route path="/trip" component={Trip} />
            <Route path="/bag" component={Bag} />
            <Route path="/calendar" component={Calendar} />
            <Route component={Calendar} />
          </Switch>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerBox}>
            <Link to="/trip" component={TouchableOpacity}>
              <View style={styles.center}>
                <Icon name="plane" size={24} color="grey" />
              </View>
            </Link>
          </View>
          <View style={styles.footerBox}>
            <Link to="/bag" component={TouchableOpacity}>
              <View style={styles.centrado}>
                <Icon name="suitcase" size={24} color="grey" />
              </View>
            </Link>
          </View>
          <View style={styles.footerBox}>
            <Link to="/calendar" component={TouchableOpacity}>
              <View style={styles.centrado}>
                <Icon name="calendar" size={24} color="grey" />
              </View>
            </Link>
          </View>
        </View>
      </NativeRouter>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    },
  body: {
    flex: 12,
    backgroundColor: 'rgba(78,188,255,0.5)',
    opacity: 1
  },
  center: {
    alignItems: 'center'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 60,
    flex: 1
  },
  footerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5
  }

})

export default App;

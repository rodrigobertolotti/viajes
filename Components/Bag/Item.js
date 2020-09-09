import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'

class Item extends React.Component {

    state= {
        checked: false
    }

    check = () => {
        this.setState(prevState =>{
            return{
                 ...prevState,
                 checked: !prevState.checked
            }
         })
    }
    render() {
        return (
            <View style={styles.itemView}>
                <CheckBox
                    center
                    title={this.props.description}
                    checked={this.state.checked}
                    onPress={this.check}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemView: {
        height: 60
    }
})

export default Item;
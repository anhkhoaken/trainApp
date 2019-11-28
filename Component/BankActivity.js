import React, { Component } from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import BankComponent from './BankComponent'

class BankActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style= { styles.container}>
                <BankComponent></BankComponent>
                <BankComponent></BankComponent>
                <BankComponent></BankComponent>
                <BankComponent></BankComponent>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
});

export default BankActivity;
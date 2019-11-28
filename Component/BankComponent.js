import React, { Component } from 'react';
import { Text,Image,TouchableOpacity,StyleSheet } from 'react-native';

class BankComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <TouchableOpacity style= { styles.container}>
                <Image source= {require('../assets/search.png')}></Image>
                <Text> MoMo </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008b8b',
        borderRadius: 5,
    }
});

export default BankComponent;

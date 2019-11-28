import React, { Component } from 'react';
import { View,TouchableOpacity,Text,Image,StyleSheet } from 'react-native';

class MoMoService extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style= {styles.container}>
                <Image source= {require('../assets/search.png')}></Image>
                <Text> Service  </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    container:{
        width: this.props.getWidth,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
});

export default MoMoService;
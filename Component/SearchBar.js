import React, { Component } from 'react';
import { Text,Image,View,TextInput,StyleSheet } from 'react-native';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style= {styles.container}>
                <Text style={styles.styleText}> 19:30 </Text>
                <TextInput style= {styles.styleInput} placeholder= 'Tìm Kiếm ...'></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        justifyContent:'space-between'
    },
    styleInput: {
        width: '75%',
        backgroundColor: '#ff8c00',
        borderRadius:10,
        fontSize:15,
        padding: 10,
    },
    styleText:{
        fontSize: 20,
        margin: 10,
        borderWidth:1,
    }
});


export default SearchBar;
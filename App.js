import React, { Component } from 'react';
import { View, StyleSheet, Text,Dimensions } from 'react-native';
import SearchBar from './Component/SearchBar';
import BankActivity from './Component/BankActivity';
import MoMoService from './Component/MoMoService';
import { FlatList } from 'react-native-gesture-handler';


const Screen_Width = Dimensions.get('window').width;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 4,
    };
  }
  render() {
    const getWidth = Screen_Width;
    return (
      <View  style= {{flexDirection: 'column'}}>
        <SearchBar></SearchBar>
        <BankActivity></BankActivity>
        <FlatList
          numColumns= {this.state.column}
          data={[
            {
              key: '1',
              name: 'serice1'
            },
            {
              key: '2',
              name: 'serice1'
            },
            {
              key: '3',
              name: 'serice1'
            },
            {
              key: '4',
              name: 'serice1'
            },
            {
              key: '5',
              name: 'serice1'
            },
            {
              key: '6',
              name: 'serice1'
            },
            {
              key: '7',
              name: 'serice1'
            },
            {
              key: '8',
              name: 'serice1'
            },
            {
              key: '9',
              name: 'serice1'
            },
            {
              key: '10',
              name: 'serice1'
            },
            {
              key: '11',
              name: 'serice1'
            },
            {
              key: '12',
              name: 'serice1'
            },

          ]}
          renderItem = {
            ({item}) => {
              return <MoMoService getWidth= {getWidth/3}> </MoMoService>
            }
          }
        />
      </View>
    );
  }
}



export default App;
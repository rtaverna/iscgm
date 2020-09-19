  import React, { Component } from 'react';
  import { StyleSheet, Text, View } from 'react-native';

  export default class Proc extends Component {
    constructor(props){
      super(props)

      const { navigation } = this.props
      const text  = navigation.getParam('text')
      const lines = text.match(/[^\r\n]+/g)

      this.state = {
        text: text,
        lines: lines
      }

      console.log('text', text)
      console.log('lines', lines)
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>ContactScreen</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });
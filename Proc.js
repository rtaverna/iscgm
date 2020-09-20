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
        lines: lines,
        approved: null,
        target: ["Sodium Laureth", "Myreth", "Lauryl Sulfate",
        "Sodium C14-16 Olefin Sulfonate",
        "Ammonium Laureth",
        "Sodium Cocoyl Sarcosinate",
        "Alkyl Benzene Sulfonate",
        "Ammonium", "Sodium Xylenesulfonate",
        "Ethyl PEG-15 Cocamine Sulfate",
        "TEA-Dodecylbenzenesulfonate",
        "Sodium Lauryl Sulfoacetate", "Dimethicone"]
      }

      // console.log('text', text)
      // console.log('lines', lines)
    }

    componentDidMount() {
      
      let words = this.state.lines.join().split(',')
      console.log('zz',words)
      for (let i = 0; i < words.length; i++)  {
        console.log(words[i])
        if (this.state.target.includes(words[i]))  {
            console.log('false!!!!!!!')
            this.state.approved = false;
        }
      }
      console.log('truuuue')
      this.state.approved = true;
    }

    render() {
      
        return (
          <View style={styles.container}>
            <Text>This product is: {this.state.approved}</Text>
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
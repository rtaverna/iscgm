  import React, { Component } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import Approved from './Approved';
  import styles from './styles';

  export default class Proc extends Component {
    constructor(props){
      super(props)

      const { navigation } = this.props
      const error = navigation.state.params.error
      const text  = navigation.getParam('text')
      const lines = text.match(/[^\r\n]+/g)

      this.state = {
        text: text,
        error: error,
        lines: lines,
        approved: true,
        propblem: null,
        target: ["sodium laureth", "myreth", "lauryl sulfate",
        "sodium c14-16 olefin sulfonate",
        "ammonium laureth",
        "sodium cocoyl sarcosinate",
        "alkyl benzene sulfonate",
        "ammonium", "sodium xylenesulfonate",
        "ethyl peg-15 cocamine sulfate",
        "tea-dodecylbenzenesulfonate",
        "sodium lauryl sulfoacetate", "dioctyl sodium sulfosuccinate",
        "sodium xylenesulfonate", "amodimethicone",
        "dimethicone",
        "dimethiconol",
        "cyclomethicone",
        "cyclopentasiloxane",
        "behenoxy dimethicone",
        "bis-aminopropyl dimethicone",
        "cetearyl methicone",
        "cetyl dimethicone",
        "phenyl trimethicone",
        "stearyl dimethicone",
        "trimethylsilylamodimethicone"]
      }
    }

    componentDidMount() {
      if (this.state.text !== '') {
      let words = this.state.lines.join().split(',')      
      for (let i = 0; i < words.length; i++)  {
        console.log(words[i])
        if (this.state.target.includes(words[i].toLowerCase()))  {
            console.log('false!!!!!!!')
            this.setState({approved: false, problem: words[i]});
        }
      }
      console.log('truuuue')
    }
  }

    render() {
        if (this.state.error) {
          return (
            <View style={styles.container}>
              <Text style={styles.header}>Oops!</Text>
              <Text style={styles.subtext}>We couldn't detect any text from your image.{"\n"}                        Please try again!</Text>
            </View>
          )
        } else return (
            <View style={styles.container}>
              {this.state.approved ? (
                <View style={styles.container}>
                  <Text style={styles.header}>Hooray!</Text> 
                  <Text style={styles.subtext}>This product is safe and healthy</Text>
                </View>
              ): (
                <View style={styles.container}>
                  <Text style={styles.header}>Uh Oh</Text> 
                  <Text style={styles.subtext}>This product containes {this.state.problem}.</Text>
                </View>)}
            </View>
          );
    } 
  }



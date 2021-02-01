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
      const target = navigation.getParam('chemical')

      this.state = {
        text: text,
        error: error,
        lines: lines,
        approved: true,
        propblem: null,
        target: target,
        sulfates: ["sodium laureth", "myreth", "lauryl sulfate",
        "sodium c14-16 olefin sulfonate",
        "ammonium laureth",
        "sodium cocoyl sarcosinate",
        "alkyl benzene sulfonate",
        "ammonium", "sodium xylenesulfonate",
        "ethyl peg-15 cocamine sulfate",
        "tea-dodecylbenzenesulfonate",
        "sodium lauryl sulfoacetate", "dioctyl sodium sulfosuccinate",
        "sodium xylenesulfonate"],
        silicones: ["amodimethicone",
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
        "trimethylsilylamodimethicone"],
        formaldehydes: ["quaternium-15",
          "DMDM hydantoin",
          "imidazolidinyl",
          "diazolidinyl",
          "benzylhemiformal"],
        all: ["sodium laureth", "myreth", "lauryl sulfate",
        "sodium c14-16 olefin sulfonate",
        "ammonium laureth",
        "sodium cocoyl sarcosinate",
        "alkyl benzene sulfonate",
        "ammonium", "sodium xylenesulfonate",
        "ethyl peg-15 cocamine sulfate",
        "tea-dodecylbenzenesulfonate",
        "sodium lauryl sulfoacetate", "dioctyl sodium sulfosuccinate",
        "sodium xylenesulfonate",
        "amodimethicone",
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
        "trimethylsilylamodimethicone",
        "quaternium-15",
        "DMDM hydantoin",
        "imidazolidinyl",
        "diazolidinyl",
        "benzylhemiformal"]
      }
    }

    componentDidMount() {
      console.log('Proc',this.state.target)
      if (this.state.text !== '') {
      let words = this.state.lines.join().split(',')
      if (this.state.target == 'sulfates') {      
        for (let i = 0; i < words.length; i++)  {
          console.log(words[i])
          if (this.state.sulfates.includes(words[i].toLowerCase()))  {
            console.log('false!!!!!!!')
            this.setState({approved: false, problem: words[i]});
          }
        }
      }  else if (this.state.target == 'silicones') {      
          for (let i = 0; i < words.length; i++)  {
            // console.log(words[i])
            if (this.state.silicones.includes(words[i].toLowerCase()))  {
              console.log('false!!!!!!!')
              this.setState({approved: false, problem: words[i]});
            }
          }
        } else if (this.state.target == 'formaldehydes'){   
          for (let i = 0; i < words.length; i++)  {
            // console.log(words[i])
            if (this.state.formaldehydes.includes(words[i].toLowerCase()))  {
              console.log('false!!!!!!!')
              this.setState({approved: false, problem: words[i]});
            }
          }
        } else  {
          for (let i = 0; i < words.length; i++)  {
            // console.log(words[i])
            if (this.state.all.includes(words[i].toLowerCase()))  {
              console.log('false!!!!!!!')
              this.setState({approved: false, problem: words[i]});
            }
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



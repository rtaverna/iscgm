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
        problem: [],
        target: target,
        chemicals: [
          {name: "sodium laureth", type: 'sulfate'}, 
          {name: "myreth", type: 'sulfate'}, 
          {name: "lauryl sulfate", type: 'sulfate'},
          {name: "sodium c14-16 olefin sulfonate", type: 'sulfate'},
          {name: "ammonium laureth",  type: 'sulfate'},
          {name: "sodium cocoyl sarcosinate", type: 'sulfate'},
          {name: "alkyl benzene sulfonate", type: 'sulfate'},
          {name: "ammonium", type: 'sulfate'},
          {name: "sodium xylenesulfonate", type: 'sulfate'},
          {name: "ethyl peg-15 cocamine sulfate", type: 'sulfate'},
          {name: "tea-dodecylbenzenesulfonate", type: 'sulfate'},
          {name: "sodium lauryl sulfoacetate", type: 'sulfate'},
          {name: "dioctyl sodium sulfosuccinate", type: 'sulfate'},
          {name: "sodium xylenesulfonate", type: 'sulfate'},
          {name: "amodimethicone", type: 'silicone'},
          {name: "dimethicone", type: 'silicone'},
          {name: "dimethiconol", type: 'silicone'},
          {name: "cyclomethicone", type: 'silicone'},
          {name: "cyclopentasiloxane", type: 'silicone'},
          {name: "behenoxy dimethicone", type: 'silicone'},
          {name: "bis-aminopropyl dimethicone", type: 'silicone'},
          {name: "cetearyl methicone", type: 'silicone'},
          {name: "cetyl dimethicone", type: 'silicone'},
          {name: "phenyl trimethicone", type: 'silicone'},
          {name: "stearyl dimethicone", type: 'silicone'},
          {name: "trimethylsilylamodimethicone", type: 'silicone'},
          {name: "quaternium-15", type: 'formaldehyde'},
          {name: "DMDM hydantoin", type: 'formaldehyde'},
          {name: "imidazolidinyl", type: 'formaldehyde'},
          {name: "diazolidinyl", type: 'formaldehyde'},
          {name: "benzylhemiformal", type: 'formaldehyde'},
      ]
      }
    }

    componentDidMount() {
      let prob = []
      let pass = true
      if (this.state.text !== '') {
        let words = this.state.lines.join().split(',')
        for (let i = 0; i < this.state.chemicals.length; i++)  {
          for (let j = 0; j < words.length; j++) {
            if (this.state.chemicals[i].name === words[j].trim() && (this.state.chemicals[i].type + 's' === this.state.target || this.state.target === "all")) {
              pass = false;
              prob.push({chem: this.state.chemicals[i].name, type: this.state.chemicals[i].type})
              break;
            }
          }
        }
        if (!pass)  {
          this.setState({
            approved: false, 
            problem: [...this.state.problem,...prob]
          });
        }
      }  
    }  
  

    render() {
        if (this.state.error) {
          return (
            <View style={styles.container}>
              <Text style={styles.header}>Oops!</Text>
              <Text style={styles.subtext}>We couldn't detect any text from your image.{"\n"}                      Please try again!</Text>
            </View>
          )
        } else return (
            <View style={styles.container}>
              {this.state.approved ? (
                <View style={styles.container}>
                  <Text style={styles.header}>Hooray!</Text> 
                  <Text style={styles.subtext}>This product contains no {this.state.target === "all" ? <Text>harmful ingredients</Text> : <Text>{this.state.target}</Text>}</Text>
                </View>
              ): (
                <View style={styles.container}>
                  <Text style={styles.header}>Uh Oh</Text> 
                  <Text style={styles.subtext}>This product contains:</Text>
                  {this.state.problem.map((chem,i) => <Text key={i} style={styles.problem}><Text style={styles.chemName}>{chem.chem}</Text>, a {chem.type}</Text>)}
                </View>)}
            </View>
          );
    } 
  }



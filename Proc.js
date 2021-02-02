  import React, { Component } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import Approved from './Approved';
  import chemicals from './chem';
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
        approved: null,
        problem: [],
        target: target,
        chemicals: chemicals
      }
    }

    componentDidMount() {
      if (this.state.text !== '') {
        let words = this.state.lines.join().split(',')
        for (let i = 0; i < words.length; i++)  {
          this.state.chemicals.forEach((chem) => {
            if (chem.name == words[i] && this.state.target == chem.type + 's')  {
              console.log('false!!!!!!!',words[i])
              this.setState({approved: false, problem: [...this.state.problem, {chem: words[i], type: chem.type}]});
            }
          }) 
        }
        console.log(this.state.approved, 'problem is:', this.state.problem,)
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
                  <Text style={styles.subtext}>This product contains {this.state.problem.map(chem => {
                    <Text>{chem.name}, a {chem.type}</Text>})}</Text>
                  })}, a {this.state.problem.type}.</Text>
                </View>)}
            </View>
          );
    } 
  }



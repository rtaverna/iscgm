import React, { Component } from 'react';
import { AppRegistry, Image, Button, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { withOrientation } from 'react-navigation';
import { Asset } from 'expo-asset';
import Cam from './Cam';
import styles from './styles';



export default class Home extends React.Component {
    // const imageURI = Asset.fromModule(require('./assets/cam.png')).uri;
   
    openCam = () => {
        console.log('!!!!!')
        this.props.navigation.navigate('Cam')

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Welcome</Text>
                <Text style={styles.subtext}>Tap Below to Analyze Ingredients</Text>
                <TouchableOpacity onPress={ this.openCam } >
                   <Image style={styles.cam} source={require('./assets/PngItem_307184.png')}/>
                </TouchableOpacity>
            </View>
       
        );
    };
};



AppRegistry.registerComponent('IosFonts', () => Home);

import React, { Component } from 'react';
import { AppRegistry, Image, Button, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { withOrientation } from 'react-navigation';
import { Asset } from 'expo-asset';
import Cam from './Cam';
import styles from './styles';



export default class Home extends React.Component {
    state = {
        chemical: null
      };
    openCam = () => {
        console.log('Home',this.state.chemical)
        this.props.navigation.navigate('Cam', {params: {chemical: this.state.chemical}})

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Welcome</Text>
                {this.state.chemical ? 
                    <Text style={styles.subtext}>Tap Camera Icon to Analyze Ingredients</Text> :
                    <Text style={styles.subtext}>Select Chemicals to Filter For</Text>
                }
                <DropDownPicker 
                    items={[{label: 'sulfates', value: 'sulfates'},{label: 'silicones',value:'silicones'},{label: 'formaldehydes',value: 'formaldehydes'},{label: 'all',value: 'all'}]}
                    defaultValue={this.state.chemical}
                    placeholder={'Select'}
                    containerStyle={styles.picker}
                    labelStyle={styles.labelStyles}
                    activeLabelStyle={styles.activeLabelStyle}
                    onChangeItem={item => this.setState({
                        chemical: item.value
                    })}
                    />
                <TouchableOpacity onPress={ this.openCam } >
                   <Image style={styles.cam} source={require('./assets/PngItem_307184.png')}/>
                </TouchableOpacity>
            </View>
       
        );
    };
};



AppRegistry.registerComponent('IosFonts', () => Home);

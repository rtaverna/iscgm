import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Approved extends React.Component {
    render() {
        return (
            <View style={styles}>
                <Text>Approved</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      color: 'blue',
      alignItems: 'center',
      backgroundColor: '#F7C3EC',
    }
  });
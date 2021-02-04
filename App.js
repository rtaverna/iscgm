import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Cam from './Cam';
import Proc from './Proc';
import Home from './Home';
import Loading from './Loading';


  const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions:{
        headerShown: false
      } 
    },
    Cam: {
      screen: Cam,
      navigationOptions:
      {
        headerTransparent: true,
        headerTitleStyle: {
          opacity: 0        
        },
        headerTintColor: '#F7C3EC'      }    
    },
    Proc: {
      screen: Proc,
      navigationOptions: {
        headerTitleStyle: {
          opacity: 0        
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor:  'white',
        headerTransparent: true,
        headerStyle: {
          backgroundColor: '#F7C3EC'
        }}
    } 
  });

  const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        );
    };
};
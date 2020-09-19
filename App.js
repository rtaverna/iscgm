import React from 'react';

import Cam from './Cam';
import Proc from './Proc';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



  const AppNavigator = createStackNavigator({
    Cam: {
      screen: Cam
    },
    Proc: {
      screen: Proc
    }
  });

  const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    };
};
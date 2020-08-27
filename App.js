import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppTabNavigator} from './components/AppTabNagivator';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer,createSwicthNavigator} from 'react-navigation';
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const SwicthNavigator = createSwicthNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(SwicthNavigator)
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/views/HomeScreen';
import DetailScreen from './src/views/DetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
  },
  { initialRouteName: 'Home' }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render () {
    return <AppContainer/>
  }
}

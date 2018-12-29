import React from 'react'
import { View, Text } from 'react-native';
import RestaurantDetail from '../components/RestaurantDetail';

export default class ProfileScreen extends React.Component {
  render () {
    const id = this.props.navigation.getParam('id', 'no-id')
    return (
      <View>
        <Text>profile</Text>
        <RestaurantDetail id={id}/>
      </View>
    )
  }
}

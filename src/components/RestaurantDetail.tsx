import React from 'react'
import { View, Text } from 'react-native';

interface Props {
  id: string
}

export default class RestaurantDetail extends React.Component<Props> {
  render() {
    const { id } = this.props
    return (
      <View>
        <Text>{id}</Text>
      </View>
    )
  }
}

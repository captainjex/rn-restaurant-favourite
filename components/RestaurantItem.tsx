import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface RestaurantItemProps {
  name: string,
  address: string
}

export default class RestaurantItem extends React.Component<RestaurantItemProps, {}> {
  render() {
    const { name, address } = this.props

    return (
      <TouchableOpacity>
        <View style={styles.restaurantItem}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  restaurantItem: {
    padding: 16
  },
  name: {
    fontSize: 18
  },
  address: {
    fontSize: 12
  }
})

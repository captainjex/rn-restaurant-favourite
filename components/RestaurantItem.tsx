import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface RestaurantItemProps {
  name: string,
  address: string
}

export default class RestaurantItem extends React.Component<RestaurantItemProps, {}> {
  state = {
    isFavourite: false
  }

  setFavourite = () => {
    this.setState({
      isFavourite: !this.state.isFavourite
    })
  }

  render() {
    const { name, address } = this.props

    return (
      <TouchableOpacity onPress={this.setFavourite}>
        <View style={styles.restaurantItem}>
          <Text style={{ ...styles.name, color: this.state.isFavourite ? '#ef2917' : null}}>{name}</Text>
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

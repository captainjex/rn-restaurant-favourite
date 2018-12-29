import React from 'react'
import { View, ScrollView } from 'react-native'

import RestaurantItem from './RestaurantItem'

interface Props {
  items: any
}

export default class RestaurantList extends React.Component<Props> {
  render() {
    const { items } = this.props
    return (
      <ScrollView>
        <View>
          {items.map((restaurant: any) => {
            return <RestaurantItem
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              address={restaurant.address}/>
          })}
        </View>
      </ScrollView>
    )
  }
}

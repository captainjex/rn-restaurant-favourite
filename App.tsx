import React from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios'

import RestaurantList from './components/RestaurantList'
import Header from './components/Header'

export default class App extends React.Component {
  state = {
    query: '',
    restaurants: [],
    isLoading: false,
    restaurantId: null
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      this.setState({
        isLoading: true
      })
      let { data: { restaurants } } = await axios.get(`https://developers.zomato.com/api/v2.1/search?q=${this.state.query}`, {
        headers: {
          'user-key': '026e5a9f7e29e3051efab94483074ea1'
        },
        params: {
          count: 10
        }
      })
      restaurants = restaurants.map((item:any) => {
        const { restaurant } = item
        return {
          id: restaurant.id,
          name: restaurant.name,
          address: restaurant.location.address
        }
      })
      this.setState({
        restaurants,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    if (this.state.restaurantId) {
      return (
        <View>

        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Header></Header>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(query) => this.setState({ query })}
        />
        <Button title="search" onPress={()=> this.getData()}></Button>
        {this.state.isLoading &&
          <ActivityIndicator size="large" style={{ justifyContent: 'center', height: 80 }}/>
        }
        {!this.state.isLoading &&
          <RestaurantList items={this.state.restaurants}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  }
});

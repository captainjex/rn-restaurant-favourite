import React from 'react'
import axios from 'axios'
import { View, Button, ActivityIndicator, TextInput, StyleSheet, StatusBar } from 'react-native';
import RestaurantList from '../components/RestaurantList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Restaurant App',
  };
  state = {
    query: '',
    restaurants: [],
    isLoading: false
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    axios.get(`https://developers.zomato.com/api/v2.1/search?q=${this.state.query}`, {
      headers: {
        'user-key': '026e5a9f7e29e3051efab94483074ea1'
      },
      params: {
        count: 10
      }
    }).then(response => {
      let { restaurants } = response.data
      restaurants = restaurants.map((item: any) => {
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
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Cari Tempat..."
            onChangeText={(query) => this.setState({ query })}
          />
          <Button title="search" onPress={() => this.getData()}></Button>
          {/* <View style={styles.box}>
          </View> */}
        </View>
        {this.state.isLoading &&
          <ActivityIndicator size="large" style={{ justifyContent: 'center', height: 80 }} />
        }
        {!this.state.isLoading &&
          <RestaurantList items={this.state.restaurants} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box: {
    elevation: 3,
    borderRadius: 10,
    margin: 12,
    padding: 10
  }
})

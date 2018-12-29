import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends React.Component {
  render () {
    return (
      <View style={styles.header}>
        <Text>Restaurant App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'red'
  }
})

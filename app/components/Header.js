import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'

const styles = StyleSheet.create({
//   header: {
//     backgroundColor: 'skyblue',
//     padding: 15,
//   },
//   title: {
//     textAlign: 'center',
//     color: 'white',
//   },
})

export default class NavBar extends React.Component {

  render() {
    
    return (
      <Header
        leftComponent = {{ icon: 'home', color: '#fff' }}
        centerComponent={{ text: 'Market Buddy', style: { color: '#fff' } }}
        rightComponent={{ icon: 'menu', color: '#fff' }}
      />
    )
  }
}

// const {children} = this.props

//     return (
//       <View style={styles.header}>
//         <Text style={styles.title}>{children}</Text>
//       </View>
//     )
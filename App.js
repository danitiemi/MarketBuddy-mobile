import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from 'market-buddy-mobile/app/components/Header';
import Login from 'market-buddy-mobile/app/screens/Login';
import { Button } from 'react-native-elements'

export default class App extends React.Component {
  
  render() {
    
    return (

      <View style = { styles.container }>
        <NavBar />
        <View style = { styles.containerLarge }>
          <View>
            <Text>Save time, save MONEY!</Text>
            {/* <Login /> */}
            </View>
            <Button
              title = 'Login'
              backgroundColor = '#5864bd'
              // onPress={ this.onLogin.bind(this) }
            />
        </View>  
      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330099'
  },
  containerLarge: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#330099'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});

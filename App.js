import React from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
        <Text>Hello, Navigation!</Text>
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: App },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tinder from './src/components/Tinder';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tinder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.headerText}>9:35</Text>
            <Text style={styles.regularText}>Good Morning</Text>
            <StatusBar style="auto" />
        </View>
        <View>
          <Text> hello!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default Todo;
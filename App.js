import React from 'react';
import { StyleSheet } from 'react-native';
import Todo from './components/todo';

export default function App() {
  return (
    <Todo />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 50,
    textAlign: 'center',
  }
});

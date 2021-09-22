import React from 'react';
import { StyleSheet } from 'react-native';
import Todo from './components/todo';
import SwipableImageView from './components/SwipableImageView';

export default function App() {
  return (
    // <Todo />
    <SwipableImageView />
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

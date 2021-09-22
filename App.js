import React from 'react';
import { StyleSheet } from 'react-native';
import Clock from './components/clock';
import SwipableImageView from './components/SwipableImageView';

export default function App() {
  return (
    // <Clock />
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

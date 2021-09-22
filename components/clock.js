import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const Clock = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    setCurrentDate(
     hours + ':' + min
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{currentDate}</Text>
      <Text style={styles.regularText}>
        {new Date().getHours() < 12 ? "Good Morning" : 
        new Date().getHours() < 17 ? "Good Afternoon" : "Good Evening"}
      </Text>
      <StatusBar style="auto" />
    </View>
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
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default Clock;
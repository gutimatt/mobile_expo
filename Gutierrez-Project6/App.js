import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';
import Album from './components/Album';
import store from './redux';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Album />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
export default App;
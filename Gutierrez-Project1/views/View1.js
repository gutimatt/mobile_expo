import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class View1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, SER 423! My name is Matthew!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A19B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

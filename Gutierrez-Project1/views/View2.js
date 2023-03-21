import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class View2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Thanks for using my app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8CCCE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

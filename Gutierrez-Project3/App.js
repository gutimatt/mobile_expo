import React, { Component } from 'react';
import {
          StyleSheet,
          Text,
          TextInput,
          TouchableOpacity,
          View
        } from 'react-native';

export default class App extends Component {
  state = {
    results: '',
  };

  onLoad = async (query) => {
    this.setState({ results: 'Loading, please wait...' });
    fetch('https://2s4b8wlhik.execute-api.us-east-1.amazonaws.com/studentData?grade=' + query, {
        method: 'GET',
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status == 400) {
          throw new Error("Invalid query");
        } else {
          throw new Error("Error fetching data");
        }
      })
      .then(results => {
        const a = results.join('\n')
        this.setState({ results: a })
      }).catch(error =>  {
        this.setState({ results: error.message});
      })
  }

  render() {
    const { results } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.preview}
            value={results}
            placeholder="Results..."
            editable={false}
            multiline
          />
          <TouchableOpacity onPress={() => this.onLoad('')} style=
          {styles.btn}>
            <Text>Load data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onLoad('A')} style=
          {styles.btn}>
            <Text>A</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onLoad('B')} style=
          {styles.btn}>
            <Text>B</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onLoad('C')} style=
          {styles.btn}>
            <Text>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onLoad('D')} style=
          {styles.btn}>
            <Text>D</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onLoad('E')} style=
          {styles.btn}>
            <Text>E</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    height: 400,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 50,
  },
  btn: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
  },
});

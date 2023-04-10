
import React, { Component, useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker'; // You'll need this for the exercise
import {
  Alert,
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const key = '@MyApp:key';

export default function App() {
  const [pickerState, setPickerState] = useState({
    picker1: {
      storedValue: '',
    },
    picker2: {
      storedValue: '',
    },
    picker3: {
      storedValue: '',
    },
  });  

  const onLoad = async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      if (storedValue !== null) {
        setPickerState(JSON.parse(storedValue));
      }
    } catch (error) {
      Alert.alert('Error', 'There was an error while loading the data');
    }
  }

  useEffect(() => {
    onLoad();
  }, []);

  const onSave = async () => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(pickerState));
      Alert.alert('Saved', 'Successfully saved on device');
    } catch (error) {
      Alert.alert('Error', 'There was an error while saving the data');
    }
  }

  const handleChange = (value, picker) => {
    setPickerState((prevState) => ({
      ...prevState,
      [picker]: {
        ...prevState[picker],
        storedValue: value
      }
    }));
  }

  return (
  
    <View style={styles.container}>
      <Text style={styles.preview}>{
        pickerState.picker1.storedValue + "\n" +
        pickerState.picker2.storedValue + "\n" +
        pickerState.picker3.storedValue
      }</Text>
      <View>
        <Picker
        style={styles.pickerContainer}
          selectedValue={pickerState.picker1.storedValue}
          onValueChange={(itemValue) => handleChange(itemValue, 'picker1')}>
              <Picker.Item label="1 Star" value="1 Star" />
              <Picker.Item label="2 Star" value="2 Star" />
              <Picker.Item label="3 Star" value="3 Star" />
              <Picker.Item label="4 Star" value="4 Star" />
              <Picker.Item label="5 Star" value="5 Star" />
        </Picker>
        <Picker
        style={styles.pickerContainer}
          selectedValue={pickerState.picker2.storedValue}
          onValueChange={(itemValue) => handleChange(itemValue, 'picker2')}>
              <Picker.Item label="1 Star" value="1 Star" />
              <Picker.Item label="2 Star" value="2 Star" />
              <Picker.Item label="3 Star" value="3 Star" />
              <Picker.Item label="4 Star" value="4 Star" />
              <Picker.Item label="5 Star" value="5 Star" />
        </Picker>
        <Picker
        style={styles.pickerContainer}
          selectedValue={pickerState.picker3.storedValue}
          onValueChange={(itemValue) => handleChange(itemValue, 'picker3')}>
              <Picker.Item label="1 Star" value="1 Star" />
              <Picker.Item label="2 Star" value="2 Star" />
              <Picker.Item label="3 Star" value="3 Star" />
              <Picker.Item label="4 Star" value="4 Star" />
              <Picker.Item label="5 Star" value="5 Star" />
        </Picker>
        <TouchableOpacity onPress={onSave} style=
          {styles.button}>
          <Text>Save locally</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLoad} style=
          {styles.button}>
          <Text>Load data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }, pickerContainer: {
    width: 300,
    height: 200
  }, preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    height: 80,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 50,
  }, input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    width: 300,
    height: 40,
    padding: 5,
  },
  button: {
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
  },
});
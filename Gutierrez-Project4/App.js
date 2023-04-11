
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

import StarPicker from './StarPicker';
import MyAudio from './MyAudio';

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
      title: 'Nervous Tic Motion of the Head to the Left',
      storedValue: '',
    },
  });  

  const [pickerIndex, setPickerIndex] = useState(0);

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
  
  const handleNextPicker = () => {
    setPickerIndex(prevIndex => (prevIndex + 1) % 3); 
  };

  const handlePreviousPicker = () => {
    setPickerIndex(prevIndex => (prevIndex - 1) % 3); 
  };

  return (
    <View style={styles.container}>
      <MyAudio handleNextPicker={handleNextPicker} handlePreviousPicker={handlePreviousPicker}/> 
      <Text style={styles.preview}>{
        "People Watching:  " + pickerState.picker1.storedValue + "\n" +
        "Hunted By A Freak " +  pickerState.picker2.storedValue + "\n" +
        "Nervous Tic Motion... " + pickerState.picker3.storedValue
      }</Text>
      <View style={styles.row}>
        {pickerIndex == 0 && (
          <StarPicker 
            selectedValue={pickerState.picker1.storedValue}
            onValueChange={'picker1'}
            handleChange ={handleChange}
          />
        )}
        {pickerIndex == 1 && (<StarPicker 
          selectedValue={pickerState.picker2.storedValue}
          onValueChange={'picker2'}
          handleChange ={handleChange}
        />)}
        {pickerIndex == 2 && (<StarPicker 
          selectedValue={pickerState.picker3.storedValue}
          onValueChange={'picker3'}
          handleChange ={handleChange}
        />)}
      </View>
      <TouchableOpacity onPress={onSave} style=
          {styles.button}>
          <Text>Save locally</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLoad} style=
          {styles.button}>
          <Text>Load data</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }, row: {
    flexDirection: 'row',
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
import React from 'react';
import {Picker} from '@react-native-picker/picker'; // You'll need this for the exercise
import {
  StyleSheet,
} from 'react-native';

export default function StarPicker({selectedValue, onValueChange, handleChange}) {
    return (
        <Picker
            style={styles.pickerContainer}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => handleChange(itemValue, onValueChange)}>
                <Picker.Item label="1 Star" value="1 Star" />
                <Picker.Item label="2 Star" value="2 Star" />
                <Picker.Item label="3 Star" value="3 Star" />
                <Picker.Item label="4 Star" value="4 Star" />
                <Picker.Item label="5 Star" value="5 Star" />
        </Picker>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        width: '33%',
        marginTop: -100,
        height: 200
    }, 
})
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
  } from 'react-native';


const Album = () => {
    const [text, onChangeText] = useState();

    return (
        <SafeAreaView>
            <TextInput
                style={styles.preview}
                value={text}
                onChangeText={onChangeText}
                // placeholder="Results..."
                editable={true}
            /> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    // height: 400,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 50,
  }
})

export default Album;
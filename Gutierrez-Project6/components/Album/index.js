import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
  } from 'react-native';

const Album = ({store}) => {
    const [text, setText] = useState();

    useEffect(() => {
        setText(store.currentStateStr);
        return () => {
          store.unsubscribe;
        };
      }, []);

    return (
        <SafeAreaView>
            <TextInput
                style={styles.preview}
                value={text}
                onChangeText={setText}
                editable={false}
                multiline
            /> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  preview: {
    backgroundColor: '#bdc3c7',
    width: 400,
    height: 600,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 50,
  }
})

export default Album;
import React  from 'react';
import { Alert, StyleSheet } from 'react-native';
import { View } from 'react-native';

import CustomButton from './CustomButton';

// Navigation is not used in the exercise, but will be helpful in the assignment.
const HomeScreen  = ({ navigation }) => {

    const handleButtonPress = () => {
      Alert.alert('Alert', "You tapped the button!");
    };
  
    return (
      <View style={styles.container}>
        <CustomButton style={styles.button} onPress={handleButtonPress} title="My First Button" size='sm' backgroundColor="#009688"/>
        <CustomButton style={styles.button} onPress={handleButtonPress} title="My Second Button" size='sm' backgroundColor="#009688"/>
        <CustomButton style={styles.button} onPress={handleButtonPress} title="My Third Button" size='sm' backgroundColor="#009688"/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      margin: 10
    }
  });

  export default HomeScreen;
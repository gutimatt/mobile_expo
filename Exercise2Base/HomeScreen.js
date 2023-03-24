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
        <CustomButton onPress={handleButtonPress} title="My First Button" size='sm' backgroundColor="#2C3333"/>
        <CustomButton onPress={handleButtonPress} title="My Second Button" size='sm' backgroundColor="#2E4F4F"/>
        <CustomButton onPress={handleButtonPress} title="My Third Button" size='sm' backgroundColor="#0E8388"/>
        <CustomButton onPress={handleButtonPress} title="My Fourth Button" size='sm' backgroundColor="#CBE4DE"/>
        <CustomButton onPress={handleButtonPress} title="My Fifth Button" size='sm' backgroundColor="#37306B"/>
        <CustomButton onPress={handleButtonPress} title="My Sixth Button" size='sm' backgroundColor="#66347F"/>
        <CustomButton onPress={handleButtonPress} title="My Seventh Button" size='sm' backgroundColor="#9E4784"/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  export default HomeScreen;
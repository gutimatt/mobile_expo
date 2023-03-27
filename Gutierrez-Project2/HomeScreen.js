import React  from 'react';
import { Alert, StyleSheet, FlatList } from 'react-native';
import { View } from 'react-native';

import CustomButton from './CustomButton';

const DATA = [
  {
    title: 'My First Button',
    backgroundColor: "#2C3333"
  },
  {
    title: 'My First Button',
    backgroundColor: "#2E4F4F"
  },
  {
    title: 'My Thrid Button',
    backgroundColor: "#0E8388"
  },
  {
    title: 'My Fourth Button',
    backgroundColor: "#CBE4DE"
  },
  {
    title: 'My Fifth Button',
    backgroundColor: "#37306B"
  },
  {
    title: 'My Sixth Button',
    backgroundColor: "#66347F"
  },
  {
    title: 'My Seventh Button',
    backgroundColor: "#9E4784"
  },
];

// Navigation is not used in the exercise, but will be helpful in the assignment.
const HomeScreen  = ({ navigation }) => {

    const handleButtonPress = () => {
      Alert.alert('Alert', "You tapped the button!");
    };
  
    const renderItem = ({item}) => {
      return (
        <CustomButton
          onPress={handleButtonPress} 
          title = {item.title}
          size='sm' 
          backgroundColor={item.backgroundColor}
        />
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
        />
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
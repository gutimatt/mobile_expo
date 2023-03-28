import React  from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from 'react-native';

import CustomButton from './CustomButton';

state = {
  links: [
    {
      title: 'Africa',
      url: 'https://en.wikipedia.org/wiki/Africa',
      backgroundColor: "#2C3333"

    },
    {
      title: 'Antarctica',
      url: 'https://en.wikipedia.org/wiki/Antarctica',
      backgroundColor: "#2E4F4F"  

    },
    {
      title: 'Asia',
      url: 'https://en.wikipedia.org/wiki/Asia',
      backgroundColor: "#0E8388"

    },
    {
      title: 'Australia',
      url: 'https://en.wikipedia.org/wiki/Australia',
      backgroundColor: "#CBE4DE"

    },
    {
      title: 'Europe',
      url: 'https://en.wikipedia.org/wiki/Europe',
      backgroundColor: "#37306B"  

    },
    {
      title: 'North America',
      url: 'https://en.wikipedia.org/wiki/North_America',
      backgroundColor: "#66347F"

    },
    {
      title: 'South America',
      url: 'https://en.wikipedia.org/wiki/South_America',
      backgroundColor: "#9E4784"

    }
  ]
}

// Navigation is not used in the exercise, but will be helpful in the assignment.
const HomeScreen  = ({ navigation }) => {

    const handleButtonPress = (url) => {
      navigation.navigate("Browser", {url: url})
    };
  
    const renderItem = ({item}) => {
      return (
        <CustomButton
          onPress={() => handleButtonPress(item.url)} 
          title = {item.title}
          size='sm' 
          backgroundColor={item.backgroundColor}
        />
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={state.links}
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
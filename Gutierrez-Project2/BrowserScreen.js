import React  from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import {WebView} from 'react-native-webview';

const BrowserScreen = ({ route, navigation }) => {

    const { url } = route.params;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <WebView source={{uri: url}} />
        </SafeAreaView>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  export default BrowserScreen;
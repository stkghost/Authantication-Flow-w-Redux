import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

// import {AuthContext} from './utils.js';

export  function SettingsScreens() {

    const {container} = styles;
    return (
      <SafeAreaView style={container}>
        <Text>SettingsScreens!</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create ({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'black',
      opacity: 0.7
    },
  })
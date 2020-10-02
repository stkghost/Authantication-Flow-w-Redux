import React from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';

import {AuthContext} from './utils.js';

export  function HomeScreen() {
    const { signOut } = React.useContext(AuthContext);
    const {container }= styles

    return (
      <SafeAreaView style={container}>
        <Text>HomeScreen!</Text>
        <Button title="Sign out" onPress={signOut} />
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
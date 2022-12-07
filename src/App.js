import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

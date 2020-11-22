import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './App/Components/AppButton/AppButton';
import AppTextInput from './App/Components/AppTextInput/AppTextInput'
import LoginScreen from './App/Screens/LoginScreen'
import RegisterScreen from './App/Screens/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

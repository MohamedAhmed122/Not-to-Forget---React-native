import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './App/Components/AppButton/AppButton';
import AppTextInput from './App/Components/AppTextInput/AppTextInput'

export default function App() {
  return (
    <View style={styles.container}>
     <AppTextInput label='Hello there' />
     <AppButton title='hello World' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

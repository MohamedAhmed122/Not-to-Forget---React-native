import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './App/Navigation/AuthNavigation';
import { View, StyleSheet} from 'react-native';
import LisitingsScreen from './App/Screens/LisitingsScreen';
import AddButton from './App/Components/AddButton/AddButton';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer> */}
      <LisitingsScreen />
      {/* <AddButton /> */}
    </View>
  );
}


const styles = StyleSheet.create({ 
  container:{
    // flex:1,
    // justifyContent:'center',
    // alignContent:'center'
  }
})
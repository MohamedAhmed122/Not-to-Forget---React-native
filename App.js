import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './App/Navigation/AuthNavigation';
import { View, StyleSheet} from 'react-native';
import LisitingsScreen from './App/Screens/LisitingsScreen';
import AddButton from './App/Components/AddButton/AddButton';
import AppCheckbox from './App/Components/AppCheckbox/AppCheckbox';
import List from './App/Components/Listings/List'
import ViewListScreen from './App/Screens/ViewListScreen';
import LoginScreen from './App/Screens/LoginScreen';


export default function App() {
  return (
    <View style={styles.container}>
    <>

      {/* <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer> */}
      {/* <LoginScreen /> */}
      {/* <List /> */}
      {/* <AddButton /> */}
      </>
       </View>
  );
}


const styles = StyleSheet.create({ 
  container:{
    flex:1,
   
    // backgroundColor:'black'
  }
})
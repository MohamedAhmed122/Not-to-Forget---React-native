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
import AppPicker from './App/Components/AppPicker/AppPicker';
import AppTextInput from './App/Components/AppTextInput/AppTextInput';
import CreateListScreen from './App/Screens/CreateListScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <>

        <CreateListScreen />
      </>
    </View>
  );
}


const styles = StyleSheet.create({ 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
    // backgroundColor:'black'
  }
})
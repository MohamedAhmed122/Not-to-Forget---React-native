import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './App/Navigation/AuthNavigation';
import { View, StyleSheet, CheckBox} from 'react-native';
import LisitingsScreen from './App/Screens/LisitingsScreen';
import AddButton from './App/Components/AddButton/AddButton';
import AppCheckbox from './App/Components/AppCheckbox/AppCheckbox';
import List from './App/Components/Listings/List'
import ViewListScreen from './App/Screens/ViewListScreen';
import LoginScreen from './App/Screens/LoginScreen';
import AppPicker from './App/Components/AppPicker/AppPicker';
import AppTextInput from './App/Components/AppTextInput/AppTextInput';
import CreateListScreen from './App/Screens/CreateListScreen';
import AppNavigation from './App/Navigation/AppNavigation';
import StatusContext from './App/Status/Context';
import AppDatePicker from './App/Components/AppDatePicker/AppDatePicker';




export default function App() {
  const [check, setCheck] = useState(false)
  return (
    // <View style={styles.container}>
      
        <NavigationContainer>
          <AppNavigation />

         </NavigationContainer>
   
      
    //  </View>
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
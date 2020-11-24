import React, { useContext, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './App/Navigation/AuthNavigation';
import { StyleSheet} from 'react-native';

import AppNavigation from './App/Navigation/AppNavigation';
// import AuthContext from './App/AuthContext/Context';





export default function App() {
  const [user, setUser] = useState(false)
  
  return (
    // <View style={styles.container}>
      // <AuthContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          <AppNavigation />

         </NavigationContainer>
      // </AuthContext.Provider>
   
      
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
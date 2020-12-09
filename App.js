import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './App/Navigation/AuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from './App/Navigation/AppNavigation';
import AuthContext from './App/AuthContext/Context';
import AppPickCategory from './App/Components/AppCategory/AppPickCategory'


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // const getUserData = async () => {
  //   try {
  //     const userData = await AsyncStorage.getItem('user');
  //     const parsedObject = userData !== null ? JSON.parse(userData) : null;
  //     setUser(parsedObject);
  //     setLoading(false);
  //   } catch (e) {
  //     setUser(null);
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    axios.defaults.baseURL = 'http://practice.mobile.kreosoft.ru/api';
    // getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? (
        <View style={styles.container}>
         
          <ActivityIndicator color="#000" size="large" />
        </View>
      ) : (
        <NavigationContainer>
          {user ? <AppNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
    // <View style={styles.container}>
    //     <AppPickCategory />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
});

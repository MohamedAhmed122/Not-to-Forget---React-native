import React, { useState } from 'react'
import Constants from "expo-constants";
import { StyleSheet, View } from 'react-native'
import AddButton from '../Components/AddButton/AddButton';
import ListingsEmpty from '../Components/Listings/ListingsEmpty';
import Lisitings from '../Components/Listings/Lisitings';

const LisitingsScreen = ({navigation}) => {
    const [listings, setListings] = useState(false)
    return (
        <View style={styles.screen}> 
            {
                listings ?  <ListingsEmpty /> :<Lisitings />
            }
            <View style={styles.btnContainer}>
                <AddButton  onPress={() => navigation.navigate('Create Listings')} />
            </View>
        </View>
    )
}

export default LisitingsScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor: 'white',
        width:'100%',
    },
   
    btnContainer:{
        position:'absolute',
        bottom:30,
        right:30,
    }
})

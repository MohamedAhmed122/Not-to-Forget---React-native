import React from 'react'
import Constants from "expo-constants";
import { Image, StyleSheet, Text, View } from 'react-native'
import AppText from '../Components/AppText/AppText';
import AddButton from '../Components/AddButton/AddButton';

const LisitingsScreen = () => {
    return (
        <View style={styles.screen}> 
        <View style={styles.imageContainer}>
            <Image
            style={styles.image} 
            source={require('../../assets/background.png')} />
             <AppText style={styles.text}>
                 So far, you have nothing to do. Have a nice rest! Typography
             </AppText>
        </View>
        <View style={styles.btnContainer}>
            <AddButton />
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
    imageContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        marginTop: 120,
        alignContent:'center',
        height:260,
        width:400,
    },
    text:{
        width:'80%',
        marginTop:15,
        textAlign:'center'
    },
    btnContainer:{
        position:'absolute',
        bottom:30,
        right:30,
    }
})

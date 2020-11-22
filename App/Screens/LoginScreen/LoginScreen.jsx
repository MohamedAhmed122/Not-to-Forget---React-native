import React from 'react'
import { StyleSheet,  View } from 'react-native'
import AppTextInput from '../../Components/AppTextInput/AppTextInput'
import AppButton from '../../Components/AppButton/AppButton'
import AppText from '../../Components/AppText/AppText'
import Constants from "expo-constants";
import { white } from '../../Config/Colors'

const LoginScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <AppTextInput label='Email' />
                <AppTextInput label='Password' />
                <View style={styles.btnContainer}>
                    <AppButton title='Login' />
                </View>
                <AppText style={styles.text}>
                    You don't have Account?
                </AppText>
            </View>
          
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor: white,
        width:'100%',
    },
    container:{
        top: 80,
    },
    btnContainer:{
        marginTop:40,
    },
    text:{
        marginTop:15, 
        textAlign:'center'
    }
})

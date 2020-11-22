import React from 'react'
import { StyleSheet, View } from 'react-native'

import Constants from "expo-constants";
import * as Yup from 'yup'

import AppText from '../Components/AppText/AppText'
import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import AppSubmitButton from '../Components/Form/AppSubmitButton'
import AppLink from '../Components/AppLink/AppLink';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email') ,
    password: Yup.string().required().min(6).label('Password')
})

const LoginScreen = ({navigation}) => {

    return ( 
        <View style={styles.screen}>
            <View style={styles.container}>
                <AppForm
                    initialValues={{email: '', password:''}}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>{
                        console.log(values)
                    }}>
                    
                    <>
                        <AppFormField 
                            name='email'
                            label='Email Address'
                            autoCapitalize='none'
                            autCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                        <AppFormField 
                            label='Password'
                            autoCapitalize='none'
                            autCorrect={false}
                            textContentType='password'
                            secureTextEntry
                            name='password'
                        />
                        <View style={styles.btnContainer}></View>
                        <AppSubmitButton 
                            title='Login' 
                        />
                    </>
                </AppForm>
                <View style={styles.textContainer}>
                    <AppText style={styles.text}>
                        you don't have Account?
                    </AppText>
                <AppLink onPress={()=>navigation.navigate('Register')} >Register</AppLink>
                </View>
            </View>
        </View>
    )
}
export default LoginScreen


const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor: 'white',
        width:'100%',
    },
    container:{
        top: 90,
    },
    btnContainer:{
        marginTop:40,
    },
    textContainer:{
        width: '100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
    }
})

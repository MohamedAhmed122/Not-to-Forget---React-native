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
    name:Yup.string().required().email().label('Name'),
    email: Yup.string().required().email().label('Email') ,
    password: Yup.string().required().min(6).label('Password'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

const RegisterScreen = ({navigation}) => {

    return ( 
        <View style={styles.screen}>
            <View style={styles.container}>
                <AppForm
                    initialValues={{
                        email: '',
                        name:'',
                        password:'',
                        confirmPassword:''
                    }}
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
                         <AppFormField  name='name' label='Name'/>
                        <AppFormField 
                            label='Password'
                            autoCapitalize='none'
                            autCorrect={false}
                            // textContentType='password'
                            // secureTextEntry
                            name='password'
                        />
                         <AppFormField 
                            label='Confirm Password'
                            autoCapitalize='none'
                            autCorrect={false}
                            // textContentType='password'
                            // secureTextEntry
                            name='confirmPassword'
                        />
                        <View style={styles.btnContainer}></View>
                        <AppSubmitButton 
                            title='Register' 
                        />
                    </>
                </AppForm>
                <View style={styles.textContainer}>
                    <AppText style={styles.text}>
                        you have Account?
                    </AppText>
                    <AppLink onPress={()=>navigation.navigate('Login')}>Login</AppLink>
                </View>
            </View>
        </View>
    )
}
export default RegisterScreen


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

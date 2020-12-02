import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Constants from "expo-constants";
import * as Yup from 'yup'

import AppText from '../Components/AppText/AppText'
import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import AppSubmitButton from '../Components/Form/AppSubmitButton'
import AppLink from '../Components/AppLink/AppLink';

import AuthContext from '../AuthContext/Context'

import ErrorMessage from '../Components/Form/ErrorMessage';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email') ,
    password: Yup.string().required().min(6).label('Password')
})

const LoginScreen = ({navigation}) => {

    const [loginFailed, setLoginFailed] = useState(false)
   
    const authContext = useContext(AuthContext)

   const handleSubmit = async ({email, password})=>{
       const URL ='http://practice.mobile.kreosoft.ru/api/login';

       try {
        const { data } = await axios.post(URL, { email, password });
        console.log(data, 'data');
        authContext.setUser(data);
        setLoginFailed(false)

       } catch (error) {
           console.log(error);
           setLoginFailed(false) 
           authContext.setUser(null);
       }

   }


    return ( 
        <View style={styles.screen}>
            <View style={styles.container}>
                <AppForm
                    initialValues={{email: '', password:''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit} >
                    
                    <>
                        <AppFormField 
                            name='email'
                            label='Email Address'
                            autoCapitalize='none'
                            autCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            mode='outlined'
                        />
                        <AppFormField 
                            label='Password'
                            autoCapitalize='none'
                            autCorrect={false}
                            textContentType='password'
                            secureTextEntry
                            name='password'
                            mode='outlined'
                        />
                        <ErrorMessage error='Invalid email or/and password' isTouched={loginFailed} />
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

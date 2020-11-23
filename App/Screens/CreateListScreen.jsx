import React from 'react'
import { StyleSheet, View } from 'react-native'

import Constants from "expo-constants";
import * as Yup from 'yup'

import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import AppSubmitButton from '../Components/Form/AppSubmitButton'
import AppFormPicker from '../Components/Form/AppFormPicker';

import {danger, green, secondary, yellow} from '../Config/Colors'


const validationSchema = Yup.object().shape({
    title: Yup.string().required() ,
    description: Yup.string().required().max(120),
    date:Yup.string().required() ,
    category:Yup.string().required() ,
    priorty: Yup.string().required() ,
})

const CreateListScreen = ({navigation}) => {

    return ( 
        <View style={styles.screen}>
            <View style={styles.container}>
                <AppForm
                    initialValues={{
                        title: '', 
                        description:'',
                        date:'',
                        category:'',
                        priorty:''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>{
                        console.log(values)
                    }}>
                    
                    <>
                        <AppFormField  name='title'   label='Title' />

                        <AppFormField 
                            label='Descripation'
                            maxLength={120}
                            numberOfLines={3}
                            name='description'
                            mode='outlined'
                        />

                        <AppFormField 
                            label='completion date' 
                            name='date'
                            icon="calendar-plus-o"  />

                        <AppFormPicker 
                        categories={categories}
                        placeholder='Category' name='category' icon="plus-square-o"/>

                        <AppFormPicker 
                        categories={priorties}
                        placeholder='Priority' name='priorty'  />

                        <View style={styles.btnContainer}/>
                        <AppSubmitButton 
                            title='Post' 
                        />
                    </>
                </AppForm>
            </View>
        </View>
    )
}
export default CreateListScreen


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

const categories =[
    {
        id:1,
        label: 'Study',
    },
    {
        id:2,
        label: 'Work',
    },
    {
        id:3,
        label: 'Sport',
    },
    {
        id:4,
        label: 'Rest',
    },
]

const priorties =[
    {
        id:1,
        label: 'urgent',
        color: danger
    },
    {
        id:2,
        label: 'Later',
        color: yellow
    },
    {
        id:3,
        label: 'Not Vey urgent',
        color: green
    },
    {
        id:4,
        label: 'Important',
        color: secondary
    },
]
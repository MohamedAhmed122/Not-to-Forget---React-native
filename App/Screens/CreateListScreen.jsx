import React from 'react'
import { StyleSheet, View } from 'react-native'

import Constants from "expo-constants";
import * as Yup from 'yup'

import AppText from '../Components/AppText/AppText'
import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import AppSubmitButton from '../Components/Form/AppSubmitButton'
import AppLink from '../Components/AppLink/AppLink';
import AppFormPicker from '../Components/Form/AppFormPicker';

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

                        <AppFormPicker placeholder='Category' name='category' icon="plus-square-o"/>

                        <AppFormPicker placeholder='Priority' name='priorty'/>

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

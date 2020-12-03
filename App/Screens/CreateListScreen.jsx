import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Constants from "expo-constants";
import * as Yup from 'yup'
import axios from 'axios'

import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import AppSubmitButton from '../Components/Form/AppSubmitButton'
import AppFormPicker from '../Components/Form/AppFormPicker';

import {danger, green, secondary, yellow} from '../Config/Colors'
import AppDatePicker from '../Components/AppDatePicker/AppDatePicker';
import { getCategories, getPriority } from '../api/Requests';
import AuthContext from '../AuthContext/Context';
import UploadScreen from '../Components/uploadScreen/uploadScreen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required() ,
    description: Yup.string().required().max(120),
    category:Yup.string().required() ,
    priority: Yup.string().required() ,
})

 const CreateListScreen = ({navigation}) => {

    const { user } = useContext(AuthContext)
    const [categories, setCategory ] = useState([]);
    const [priority, setPriority ] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false)

    const createTask = async (
        title,
        description,
        deadline,
        category_id,
        priority_id
      ) => {
        setVisibleModal(true);
        try {
          const { data } = await axios.post(
            'http://practice.mobile.kreosoft.ru/api/tasks',
            {
              title,
              description,
              done: 0,
              deadline,
              category_id,
              priority_id,
            },
            {
              headers: {
                Authorization: `Bearer ${user.api_token}`,
              },
            }
          );
        //   appContext.getAppData(true);
           console.log(data);
          navigation.goBack();
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        const fetchCategory = getCategories(user.api_token)
        setCategory(fetchCategory);
        const fetchPriority = getPriority(user.api_token)
        setPriority(fetchPriority);
    },[])

    // const URL ='http://practice.mobile.kreosoft.ru/api'

     
    return ( 
        <View style={styles.screen}>
            <UploadScreen visible={visibleModal} onDone={()=>setVisibleModal(false)} />
            <View style={styles.container}>
                <AppForm
                    initialValues={{
                        title: '', 
                        description:'',
                        date:'',
                        category:'',
                        priority:''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        const { title, description, date, category, priority } = values;
                       await createTask(
                          title,
                          description,
                          new Date(date).getTime() / 1000,
                          category.id,
                          priority.id
                        );
            
                        // console.log(values, 'values');
                      }}
                    >
                    
                    <>
                        <AppFormField  name='title'   label='Title' />

                        <AppFormField 
                            label='Description'
                            maxLength={120}
                            numberOfLines={3}
                            name='description'
                            mode='outlined'
                        />
                        <AppDatePicker allowPress  name='date' />

                        <AppFormPicker 
                        categories={categories}
                        placeholder='Category' name='category' icon="plus-square-o"/>

                        <AppFormPicker 
                        categories={priority}
                        placeholder='Priority' name='priority'  />

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

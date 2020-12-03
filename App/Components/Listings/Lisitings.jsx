import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {  primary } from '../../Config/Colors'
import AppText from '../AppText/AppText'
import setColor from '../../Config/colorUtility'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from './List'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AuthContext from '../../AuthContext/Context'
import axios from 'axios'

const Lisitings = ({listings}) => {

    const { user }= useContext(AuthContext);

    const navigation = useNavigation()

    const deleteTask = async(id, checked) =>{
        const URL = 'http://practice.mobile.kreosoft.ru/api';
       
        try {
            const config ={
                headers :{
                    Authorization: `Bearer ${user.api_token}`,
                }
            }
            const { data } = await axios.delete(`${URL}/tasks/${id}`, config)
            return listings.filter(list => list.id !== id )
        } catch (error) { 
            console.log(error, 'Error in deleting')
        }
    }
   
    return (
        <View>
           <AppText style={styles.text}>Work</AppText>
           {
               listings?.map(item =>(
                <Swipeable
                
                    key={item.id.toString()}
                    renderRightActions={()=> (
                        <>
                             <TouchableOpacity
                            onPress={() => {
                                deleteTask(item.id);;
                            }}
                            style={styles.swipe}
                            >
                            <MaterialCommunityIcons
                            useNativeDriver={true}
                            name="delete"
                            size={30}
                            style={{ marginLeft: 20 }}
                            />
                            </TouchableOpacity>
                        </>
                    )}
                    >
                     <List
                     useNativeDriver={true} 
                          onPress={()=>navigation.navigate('View Listings', item )}
                          key={item.id.toString()}
                          title={item.title}
                          subTitle={item.category.name}
                          color={item.priority.color} 
                          done={item.done}
                      />
                 </Swipeable>
               ))
           }
        </View>
    )
}

export default Lisitings

const styles = StyleSheet.create({
    text:{
        margin: 20,
        color: primary,
        fontWeight: 'bold',
        fontSize:30,
    },
    swipe:{
        backgroundColor: '#eee',
        height: '82%',
        width: 100,
        justifyContent: 'center',
        borderRadius: 10,
    }
})

// const Listings =[
//     {
//         id: 1,
//         title: 'English Homework',
//         subtitle: 'Lesson1',
//         descripation:
//         'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',
//         category: 'study',
//         date:'21.09.2020',
//         priorty:'Urgent'
//     },
//     {
//         id: 2,
//         title: 'Frensh Homework',
//         subtitle: 'Lesson2',
//         descripation:
//         'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',
//         category: 'study',
//         date:'20.12.2020',
//         priorty:'Not Vey Urgent'
//     }
//     ,
//     {
//         id: 3,
//         title: 'Work in university',
//         subtitle: 'Work baby',
//         descripation:
//         'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',        
//         category: 'Work',
//         date:'04.09.2019',
//         priorty:'Later'

//     },
//     {
//         id: 4,
//         title: 'Work in resturant',
//         subtitle: 'fish',
//         descripation:
//         'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',
//         category: 'Work',
//         date:'02.02.2020',
//         priorty:'Important'

//     },
// ]
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {  primary } from '../../Config/Colors'
import AppText from '../AppText/AppText'
import setColor from '../../Config/colorUtility'
import List from './List'

const Lisitings = ({listings}) => {
    const navigation = useNavigation()
   
    return (
        <View>
           <AppText style={styles.text}>Work</AppText>
           {
               listings.map(item =>(
                 
                   <List 
                        onPress={()=>navigation.navigate('View Listings', item )}
                        key={item.id.toString()}
                        title={item.title}
                        subTitle={item.category.name}
                        color={item.priority.color} 
                        />
               ))
           }
           {/* <AppText style={styles.text}>Study</AppText>
           {
               Listings.map(item =>(
                   item.category ==='study' &&
                   <List 
                        onPress={()=>navigation.navigate('View Listings', item)}
                        key={item.id.toString()}
                        title={item.title}
                        subTitle={item.subtitle}
                        color={setColor(item.priorty)}
                       
                        />
               ))
            } */}
          
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
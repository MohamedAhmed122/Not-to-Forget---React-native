import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { danger, yellow, green, primary, secondary } from '../../Config/Colors'
import AppText from '../AppText/AppText'
import List from './List'

const Lisitings = () => {
    const navigation = useNavigation()
    return (
        <View>
           <AppText style={styles.text}>Work</AppText>
           {
               Listings.map(item =>(
                   item.category ==='Work' &&
                   <List 
                        onPress={()=>navigation.navigate('View Listings', item)}
                        key={item.id.toString()}
                        title={item.title}
                        subTitle={item.subtitle}
                        color={item.color}/>
               ))
           }
           <AppText style={styles.text}>Study</AppText>
           {
               Listings.map(item =>(
                   item.category ==='study' &&
                   <List 
                        onPress={()=>navigation.navigate('View Listings', item)}
                        key={item.id.toString()}
                        title={item.title}
                        subTitle={item.subtitle}
                        color={item.color}/>
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
    }
})

const Listings =[
    {
        id: 1,
        title: 'English Homework',
        subtitle: 'Lesson1',
        descripation:
        'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',
        color: secondary,
        category: 'study',
        date:'21.09.2020',
        priorty:'urget'
    },
    {
        id: 2,
        title: 'Frensh Homework',
        subtitle: 'Lesson2',
        descripation:
        'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',
        color: danger,
        category: 'study',
        date:'20.12.2020',
        priorty:'Not Very Urgent'
    }
    ,
    {
        id: 3,
        title: 'Work in university',
        subtitle: 'Work baby',
        descripation:
        'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',
        color: green,
        category: 'Work',
        date:'04.09.2019',
        priorty:'Later'

    },
    {
        id: 4,
        title: 'Work in resturant',
        subtitle: 'fish',
        descripation:
        'rem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi inventore at, rem quibusdam perferendis sed! Sapiente, repellendus, ratione in laudantium at architecto molestiae asperiores porro aspernatur cum, reprehenderit maiores?',
        color: yellow,
        category: 'Work',
        date:'02.02.2020',
        priorty:'Later'

    },
]
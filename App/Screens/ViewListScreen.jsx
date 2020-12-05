import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants";
import AppText from '../Components/AppText/AppText'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {  green, secondary } from '../Config/Colors';

const ViewListScreen = ({navigation, route}) => {
    const item = route.params

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View>
                    <AppText style={styles.mainText}>{item.title}</AppText>
                    <AppText style={styles.subText}>{item.category.name}</AppText>
                </View>
                <View>
                    <AntDesign 
                    name="edit" 
                    size={30} 
                    color={secondary} 
                    onPress={() =>
                        navigation.navigate('Edit Listings', {
                          item,
                        })
                      }
                    />
                    <AppText style={styles.status}>{item.Done === 0 ? 'Done' : 'New' }</AppText>
                </View>
            </View>
                <AppText style={styles.text}>{item.description}</AppText>
                <View style={styles.container}>
                    <View style={{flexDirection:'row'}}>
                        <MaterialIcons name="access-time" size={24} color="black" />
                        <AppText style={styles.subText}>
                            from  {new Date(item.deadline * 1000).toLocaleDateString()}
                        </AppText>
                    </View>
                    <AppText>{item.priority.name}</AppText>
                </View>
            
        </View>
    )
}

export default ViewListScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor: 'white',
        width:'100%',
    },
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        padding:15,
        justifyContent:'space-between'
    },
    mainText:{
        fontWeight:"bold",
        fontSize:30,
    },
    subText:{
        fontSize:17,
        marginLeft:7,
        
    },
    text:{
        margin:10,
        padding:10,
    },
    status:{
        color: green,
        fontWeight:'bold',
        marginTop:10,
    }
})

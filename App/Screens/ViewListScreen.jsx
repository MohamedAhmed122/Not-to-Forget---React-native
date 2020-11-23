import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants";
import AppText from '../Components/AppText/AppText'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { gray, green, secondary } from '../Config/Colors';

const ViewListScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View>
                    <AppText style={styles.mainText}>Title</AppText>
                    <AppText style={styles.subText}>SubTitle</AppText>
                </View>
                <View>
                    <AntDesign name="edit" size={30} color={secondary} />
                    <AppText style={styles.status}>Done</AppText>
                </View>
            </View>
                <AppText style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio modi repellat ut tempora atque quis, doloribus, perferendis vero repudiandae ducimus itaque harum error nesciunt earum culpa est, porro hic aspernatur.</AppText>
                <View style={styles.container}>
                    <View style={{flexDirection:'row'}}>
                        <MaterialIcons name="access-time" size={24} color="black" />
                        <AppText style={styles.subText}>from 12.12.2020</AppText>
                    </View>
                    <AppText>urgent</AppText>
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
        marginTop:5,
    }
})

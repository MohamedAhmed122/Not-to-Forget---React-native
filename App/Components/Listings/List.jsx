import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { white, yellow } from '../../Config/Colors'
import AppCheckbox from '../AppCheckbox/AppCheckbox'
import AppText from '../AppText/AppText'

const List = ({color, title, subTitle, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, {backgroundColor: color}]}>
                <View style={styles.textContainer}>
                    <AppText style={styles.mainText}>{title}</AppText>
                    <AppText style={styles.subText}>{subTitle}</AppText>
                </View>
                <View style={styles.check}>
                    <AppCheckbox  color={color}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default List

const styles = StyleSheet.create({
    container:{
        padding:20,
        height:100,
        marginLeft:'5%',
        width: '90%',
        // alignContent:'center',
        alignItems:'center',
        borderRadius:10,

        backgroundColor: yellow,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,



        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,

    },
    mainText:{
        fontWeight: 'bold',
        color: white,
        marginBottom:10,
    },
    subText:{
        color: white,
        fontWeight:'600',
    },
    check:{
        width:'100%',
        right:50,
        // position:'absolute'
        alignItems:'flex-end',
        // justifyContent:'flex-end'
    }
    
})

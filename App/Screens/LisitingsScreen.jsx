import React, { useContext, useEffect, useState } from 'react'
import Constants from "expo-constants";
import { ScrollView,RefreshControl, StyleSheet, Text, View } from 'react-native'
import AddButton from '../Components/AddButton/AddButton';
import AppButton from '../Components/AppButton/AppButton'
import ListingsEmpty from '../Components/Listings/ListingsEmpty';
import AppActivityIndictor from '../Components/AppActivityIndicator/AppActivityIndicator'
import Lisitings from '../Components/Listings/Lisitings';
import AuthContext from '../AuthContext/Context';
import axios from 'axios';

const LisitingsScreen = ({navigation}) => {
    const [listings, setListings] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [refresh, setRefresh ] = useState(false)
    const {user} = useContext(AuthContext)

    const getListings = async() =>{
        const URL = 'http://practice.mobile.kreosoft.ru/api';
        setLoading(true)
        setRefresh(true)
        try {
            const config ={
                headers :{
                    Authorization: `Bearer ${user.api_token}`,
                }
            }
            console.log(user.api_token); 
            const { data: listingsData } = await axios.get(`${URL}/tasks`, config)
            setListings(listingsData)
            setLoading(false)
            setRefresh(false)

        } catch (error) { 
            console.log(error, 'Error is coming from getting the data ')
            setError(true)
            setRefresh(false)
        }
    }
    const deleteTask = async(id, checked) =>{
        const URL = 'http://practice.mobile.kreosoft.ru/api';
        try {
          
            const config ={
                headers :{
                    Authorization: `Bearer ${user.api_token}`,
                }
            }
            const { data } = await axios.delete(`${URL}/tasks/${id}`, config)
            if(data){
                setRefresh(true)
            }
           
            setRefresh(false)
            return listings.filter(list => list.id !== id )
        } catch (error) { 
            console.log(error, 'Error in deleting')
            setRefresh(false)
        }
    }
   
    const  onRefresh = () =>{
        getListings()
        deleteTask()
    }

    useEffect(()=>{
        getListings()
     
    },[])

    return (
        <View style={styles.screen}> 
             <AppActivityIndictor visible={loading}/>
                {error  && <>
                <Text style={styles.text}>couldn't get the data for the server</Text>
                <AppButton title='Retry' onPress={getListings} />
                </>}
                <ScrollView
                    refreshControl={
                    <RefreshControl refreshing={refresh}  onRefresh={onRefresh} />
                    }
                >
                  <Lisitings listings={listings} deleteTask={deleteTask}/>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <AddButton  onPress={() => navigation.navigate('Create Listings')} />
                </View>
        </View>
    )
}

export default LisitingsScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor: 'white',
        width:'100%',
    },
   
    btnContainer:{
        position:'absolute',
        bottom:30,
        right:30,
    },
    text :{ 
        textAlign:'center'
    }
})













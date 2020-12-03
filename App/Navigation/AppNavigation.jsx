import React from 'react'
import { StyleSheet,} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LisitingsScreen from '../Screens/LisitingsScreen'
import CreateListScreen from '../Screens/CreateListScreen'
import ViewListScreen from '../Screens/ViewListScreen'
import UpdateListScreen from '../Screens/EditScreen';


const AppNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen component={LisitingsScreen} name='Not Forget' />
            <Stack.Screen component={CreateListScreen} name='Create Listings' />
            <Stack.Screen component={ViewListScreen} name='View Listings' />
            <Stack.Screen component={UpdateListScreen} name="Edit Listings" />
        </Stack.Navigator>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})

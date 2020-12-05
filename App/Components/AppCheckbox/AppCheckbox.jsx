import React, {  useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { primary, white } from '../../Config/Colors'
import { AntDesign } from '@expo/vector-icons';
import AuthContext from '../../AuthContext/Context';
import axios from 'axios'


const AppCheckbox = ({color=primary, done, id}) => {
    console.log(id);
    const { user } = useContext(AuthContext)
    const [check, setCheck] = useState()

    const onCheck = async (
      ) => {
        try {
          const { data } = await axios.patch(
            `http://practice.mobile.kreosoft.ru/api/tasks/${id}`,
            {
                done :done ===0? 1: 0
            },
            {
              headers: {
                Authorization: `Bearer ${user.api_token}`,
              },
            }
          );
          console.log(user.api_token);
          console.log('checked', data);
    
        } catch (error) {
          console.log(error, 'error in checked');
        }
      };
    
      const handleChecked = () =>{
        setCheck(1)
        onCheck()
      }
   
    return (
        <TouchableWithoutFeedback onPress={handleChecked}>
            <View style={styles.container}>
               { check && <AntDesign style={!check? styles.container : styles.clicked} name="check" size={20} color={color} />}
            </View>
        </TouchableWithoutFeedback>
   
    )
}

export default AppCheckbox;

const styles = StyleSheet.create({
    container:{
        height: 25,
        width: 25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 2,
        borderColor: white,

    },
    clicked:{
        backgroundColor:white,
        height: 25,
        width: 25,
        margin:100,
       
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 2,
        borderColor: white,
    },
    check:{
        alignContent:'center',
        justifyContent:'center'
    },
    checkBox:{

    }
})

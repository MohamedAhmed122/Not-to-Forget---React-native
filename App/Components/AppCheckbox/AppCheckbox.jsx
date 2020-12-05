import React, {  useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { primary, white } from '../../Config/Colors'
import { AntDesign } from '@expo/vector-icons';
import AuthContext from '../../AuthContext/Context';
import axios from 'axios'


const AppCheckbox = ({ color = primary, done, onCheck }) => {
  const [check, setCheck] = useState(done ? true : false);

  return (

      <View style={styles.container}>
        {check && (
          <AntDesign
            style={!check ? styles.container : styles.clicked}
            name="check"
            size={20}
            color={color}
            onPress={() => {
              onCheck();
              setCheck(!check);
            }}
          />
        )}
      </View>
  );
};

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

import React, {useState} from 'react'
import { TextInput } from 'react-native-paper';
import { StyleSheet, } from 'react-native'

export default function AppTextInput({label,onChangeText, ...otherProps}) {

  return (
    <TextInput
      label={label}
      mode='outlined'
      onChangeText={onChangeText}
      selectionColor='black'
      underlineColor='black'
      style={styles.input}
      { ...otherProps}
    />
  );
}

const styles = StyleSheet.create({
    input:{
        width: '92%',
        marginLeft: '4%',
        marginTop:15,
        borderRadius:15
}
})
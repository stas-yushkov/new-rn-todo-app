import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

import colors from './constants/colors';

import { DEFAULT_COLOR_THEME } from './constants/'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      console.log(`${(new Date).toLocaleTimeString()}: ${value}`);
      setValue('');
    } else {
      Alert.alert(
        'Todo title must be provided',
        'Please specify todo title',
        [{
          text: 'Ok',
          onPress: () => console.log('Ok Pressed')
        }],
        {
          cancelable: true
        }
      );
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Please specify todo title'
        placeholderTextColor={colors[DEFAULT_COLOR_THEME].PLACEHOLDER_TEXT_COLOR}
      // keyboardType='phone-pad'
      // autoCorrect={false}
      // autoCapitalize="none"
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,

  },
  input: {
    width: '80%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    color: colors[DEFAULT_COLOR_THEME].TEXT_COLOR,
    borderBottomColor: colors[DEFAULT_COLOR_THEME].BORDER_BOTTOM_COLOR,
  },
})
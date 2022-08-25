import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

import colors from '../constants/colors';


export const AddTodo = ({ onSubmit, theme }) => {
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
        style={
          {
            ...styles.input,
            color: colors[theme].TEXT_COLOR,
            borderBottomColor: colors[theme].ACCENT_COLOR,
          }
        }
        onChangeText={setValue}
        value={value}
        placeholder="Please specify todo title"
        placeholderTextColor={colors[theme].PLACEHOLDER_TEXT_COLOR}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={64}
      />
      <Button
        title="Add"
        color={colors[theme].ACCENT_COLOR}
        onPress={pressHandler}
        accessibilityLabel="Add todo"
      />
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
  },
})
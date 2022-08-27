import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons/';

import colors from '../constants/colors';


export const AddTodo = ({ onSubmit, theme }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim().length < 3) {
      Alert.alert(
        'Error!',
        `Todo title should be 3+ sumbols long. Now title is ${value.trim().length
        } symbol(s) long. Please specify proper todo title`,
        [{
          text: 'Ok',
        }],
        {
          cancelable: true
        }
      );
    } else {
      onSubmit(value);
      console.log(`${(new Date).toLocaleTimeString()}: ${value.trim()}`);
      setValue('');
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={
          {
            ...styles.input,
            color: colors[theme].textColor,
            borderBottomColor: colors[theme].accentColor,
          }
        }
        onChangeText={setValue}
        value={value}
        placeholder="Please specify todo title"
        placeholderTextColor={colors[theme].placeholderTextColor}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={64}
      />
      <AntDesign.Button
        onPress={pressHandler}
        name="pluscircleo"
        color={colors[theme].button.accent.txt}
        backgroundColor={colors[theme].button.accent.bg}
        size={32}
      >
        Add
      </AntDesign.Button>
      {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
      {/* <Button
        title="Add"
        color={colors[theme].ACCENT_COLOR}
        onPress={pressHandler}
        accessibilityLabel="Add todo"
      /> */}
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
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
})
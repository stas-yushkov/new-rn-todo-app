import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";

import { ButtonIcon } from "./ui";

import colors from '../constants/colors';

export const AddTodo = ({ onSubmit, theme, style }) => {
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
      Keyboard.dismiss();
      setValue('');
    }
  }

  return (
    <View style={{ ...styles.block, ...style }}>
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
      <ButtonIcon
        onPress={pressHandler}
        theme={theme}
        title="Add"
        bgColor={colors[theme].buttons.accent.bg}
        name="pluscircleo"
        size={32}
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
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
})

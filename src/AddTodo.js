import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const pressHandler = () => {
    onSubmit('Test todo');
    console.log(`${(new Date).toLocaleTimeString()} Test todo`);
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
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
    borderBottomColor: '#2482ff'
  },
})
import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = () => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add" />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#282c34'
  },
})
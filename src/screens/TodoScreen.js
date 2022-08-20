import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const TodoScreen = ({ todo, goBack }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title='Back' onPress={goBack} />
    </View>
  )
}

const styles = StyleSheet.create({

})
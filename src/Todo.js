import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

export const Todo = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.text} key={todo.id}>{todo.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#a4a3a5',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: '#cecdce'
  }
})
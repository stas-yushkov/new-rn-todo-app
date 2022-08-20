import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { DEFAULT_COLOR_THEME, ACTIVE_OPACITY_NUM } from './constants';

import colors from './constants/colors';

export const Todo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY_NUM}
      onPress={() => console.log('Pressed: ', todo.title)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.text} key={todo.id}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: colors[DEFAULT_COLOR_THEME].TODO_BORDER_COLOR,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: colors[DEFAULT_COLOR_THEME].TEXT_COLOR,
  }
})
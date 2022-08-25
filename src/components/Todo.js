import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { ACTIVE_OPACITY_NUM } from '../constants';
import colors from '../constants/colors';
import { TextBold } from './ui';


export const Todo = ({ todo, onRemove, onOpen, theme }) => {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY_NUM}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View
        style={
          {
            ...styles.todo,
            borderColor: colors[theme].TODO_BORDER_COLOR
          }
        }
      >
        <TextBold theme={theme}>
          {todo.title}
        </TextBold>
      </View>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  }
})
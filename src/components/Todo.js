import React from 'react';
import { View, StyleSheet } from 'react-native'

import { TextRegular, TouchableDependsOfOS } from './ui';

import { ACTIVE_OPACITY_NUM } from '../constants';
import colors from '../constants/colors';

export const Todo = ({ todo, onRemove, onOpen, theme, style }) => {
  return (
    <TouchableDependsOfOS
      activeOpacity={ACTIVE_OPACITY_NUM}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
      accessibilityLabel="Press to open todo or long press to remove todo"
    >
      <View
        style={
          {
            ...styles.todo,
            borderColor: colors[theme].todoBorderColor,
            ...style
          }
        }
      >
        <TextRegular theme={theme}>
          {todo.title}
        </TextRegular>
      </View>
    </TouchableDependsOfOS >
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

import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native'

import { ThemeContext } from '../context/theme/themeContext';

import { TouchableDependsOfOS } from './ui/TouchableDependsOfOS';
import { TextRegular } from './ui/TextRegular';

import { ACTIVE_OPACITY_NUM } from '../constants';
import colors from '../constants/colors';

export const Todo = ({ todo, onRemove, onOpen, style }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableDependsOfOS
      activeOpacity={ACTIVE_OPACITY_NUM}
      onPress={() => onOpen(todo.id)}
      onLongPress={() => onRemove(todo.id)}
      accessibilityLabel="Press to open todo or long press to remove todo"
    >
      <View
        style={{
          ...styles.todo,
          borderColor: colors[theme].todoBorderColor,
          ...style
        }}
      >
        <TextRegular>
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

import React, { useContext } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';

import { MainScreen, TodoScreen } from './screens';
import { Navbar } from './components';

import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

import { StatusBarStyles, PADDING_HORIZONTAL } from './constants/';
import colors from './constants/colors';

export const MainLayout = ({ onLayoutRootView }) => {
  const {
    todos, theme,
    addTodo, updateTodo, removeTodo, toggleTheme
  } = useContext(TodoContext)
  const {
    todoId,
    changeScreen
  } = useContext(ScreenContext)

  let content = (
    <MainScreen
      theme={theme}
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={changeScreen}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen
        theme={theme}
        todo={selectedTodo}
        goBack={() => changeScreen(null)}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    )
  }

  return (
    <View
      style={
        {
          ...styles.app,
          backgroundColor: colors[theme].appBgColor
        }
      }
      onLayout={onLayoutRootView}
    >
      <StatusBar
        animated={true}
        backgroundColor={colors[theme].navbarBgColor}
        barStyle={StatusBarStyles[theme]}
      // hidden
      />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        title="Todo App"
      />
      <View style={styles.container}>
        {content}
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  app: {
    height: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});

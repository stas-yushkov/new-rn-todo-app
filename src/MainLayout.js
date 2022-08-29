import React, { useContext } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';

import { MainScreen, TodoScreen } from './screens';
import { Navbar } from './components';

import { ThemeContext } from './context/theme/themeContext';
import { ScreenContext } from './context/screen/screenContext';
import { TodoContext } from './context/todo/todoContext';

import { StatusBarStyles, PADDING_HORIZONTAL } from './constants/';
import colors from './constants/colors';

export const MainLayout = ({ onLayoutRootView }) => {
  const {
    theme,
    toggleTheme
  } = useContext(ThemeContext)
  const {
    todoId,
    changeScreen
  } = useContext(ScreenContext)
  const {
    todos,
    addTodo, updateTodo, removeTodo
  } = useContext(TodoContext)

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

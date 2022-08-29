import React, { useContext } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';

import { MainScreen, TodoScreen } from './screens';
import { Navbar } from './components';

import { TodoContext } from './context/todo/todoContext';

import { StatusBarStyles, PADDING_HORIZONTAL } from './constants/';
import colors from './constants/colors';

export const MainLayout = ({ onLayoutRootView }) => {
  const {
    todos, selectedTodoId, theme,
    setSelectedTodoId, addTodo, updateTodo, removeTodo, toggleTheme
  } = useContext(TodoContext)

  let content = (
    <MainScreen
      theme={theme}
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setSelectedTodoId}
    />
  )

  if (selectedTodoId) {
    const selectedTodo = todos.find(todo => todo.id === selectedTodoId)
    content = (
      <TodoScreen
        theme={theme}
        todo={selectedTodo}
        goBack={() => setSelectedTodoId(null)}
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

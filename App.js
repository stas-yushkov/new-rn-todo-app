import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import { Navbar } from './src/components';
import { MainScreen, TodoScreen } from './src/screens/';

import { DEFAULT_COLOR_THEME } from './src/constants/';
import colors from './src/constants/colors';


export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    // { id: 1, title: 1 },
    // { id: 2, title: 2 },
    // { id: 3, title: 3 },
    // { id: 4, title: 4 },
    // { id: 5, title: 5 },
    // { id: 6, title: 6 },
    // { id: 7, title: 7 },
    // { id: 8, title: 8 },
    // { id: 9, title: 9 },
    // { id: 10, title: 10 },
    // { id: 11, title: 11 },
    // { id: 12, title: 12 },
  ]);

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = (itemId) => {
    setTodos(prev => prev.filter(({ id }) => id !== itemId))
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
    />
  )

  if (todoId) {
    content = <TodoScreen />
  }

  return (
    <View style={styles.app}>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        {content}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    backgroundColor: colors[DEFAULT_COLOR_THEME].APP_BG_COLOR,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});

import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Alert } from 'react-native';

import { Navbar } from './src/components';
import { MainScreen, TodoScreen } from './src/screens/';

import { DEFAULT_COLOR_THEME, STATUS_BAR_STYLES } from './src/constants/';
import colors from './src/constants/colors';


export default function App() {
  const [todoId, setTodoId] = useState(1);
  const [theme, setTheme] = useState(DEFAULT_COLOR_THEME);
  const [todos, setTodos] = useState([
    { id: 1, title: 'Title of FIRST todo' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
    { id: 10, title: '10' },
    { id: 11, title: '11' },
    { id: 12, title: '12' },
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

  const editTodo = (updatedTodo) => {
    setTodos(prev =>
      prev.map(item => {
        if (item.id === updatedTodo.id) {
          item.title = updatedTodo.title;
        }
        return item;
      })

    )
  }

  const removeTodo = (itemId) => {
    const todoToRemove = todos.find(todo => todo.id === itemId)
    Alert.alert(
      "Removing todo...",
      `Are you shure you want to remove '${todoToRemove.title}'?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(({ id }) => id !== itemId));
          }
        }
      ],
      { cancelable: true }
    );
  }

  const toggleTheme = () => {
    if (theme === DEFAULT_COLOR_THEME) {
      setTheme(Object.keys(colors)[1])
    } else {
      setTheme(Object.keys(colors)[0])
    }
  }

  let content = (
    <MainScreen
      theme={theme}
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen
        theme={theme}
        todo={selectedTodo}
        goBack={() => setTodoId(null)}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    )
  }

  return (
    <View
      style={
        {
          ...styles.app,
          backgroundColor: colors[theme].APP_BG_COLOR
        }
      }
    >
      <StatusBar
        animated={true}
        backgroundColor={colors[theme].NAVBAR_BG_COLOR}
        barStyle={STATUS_BAR_STYLES[theme]}
      // hidden
      />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        title='Todo App'
      />

      <View style={styles.container}>
        {content}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});

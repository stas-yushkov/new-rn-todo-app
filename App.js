import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

import { Navbar, AddTodo, Todo } from './src';

import colors from './src/constants/colors';

import { DEFAULT_COLOR_THEME } from './src/constants/';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos(todos.concat([newTodo]))

    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos, newTodo
    //   ]
    // })

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <View style={styles.app}>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <View>
          {todos.map(todo => {
            return (
              <Todo key={todo.id} todo={todo}></Todo>
            )
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    backgroundColor: colors[DEFAULT_COLOR_THEME].APP_BG_COLOR,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});

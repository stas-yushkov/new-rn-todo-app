import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar, StyleSheet, View, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Navbar } from './src/components';
import { MainScreen, TodoScreen } from './src/screens/';

import { DEFAULT_COLOR_THEME, StatusBarStyles, Fonts } from './src/constants/';
import colors from './src/constants/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    [Fonts.ROBOTO_BOLD]: require('./assets/fonts/Roboto-Bold.ttf'),
    [Fonts.ROBOTO_REGULAR]: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [todoId, setTodoId] = useState(null);
  const [theme, setTheme] = useState(DEFAULT_COLOR_THEME);
  const [todos, setTodos] = useState([
    { id: 1, title: 'Title of FIRST todo' },
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
      'Removing todo...',
      `Are you shure you want to remove '${todoToRemove.title}'?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Remove',
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

  if (!fontsLoaded) {
    return null;
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

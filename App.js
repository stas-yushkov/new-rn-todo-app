import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar, StyleSheet, View, Alert } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Navbar } from './src/components';
import { MainScreen, TodoScreen } from './src/screens/';

import { DEFAULT_COLOR_THEME, STATUS_BAR_STYLES, FONTS } from './src/constants/';
import colors from './src/constants/colors';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          [FONTS.ROBOTO_BOLD]: require('./assets/fonts/Roboto-Bold.ttf'),
          [FONTS.ROBOTO_REGULAR]: require('./assets/fonts/Roboto-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const [todoId, setTodoId] = useState(null);
  const [theme, setTheme] = useState(DEFAULT_COLOR_THEME);
  const [todos, setTodos] = useState([
    // { id: 1, title: 'Title of FIRST todo' },
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

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={
        {
          ...styles.app,
          backgroundColor: colors[theme].APP_BG_COLOR
        }
      }
      onLayout={onLayoutRootView}
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

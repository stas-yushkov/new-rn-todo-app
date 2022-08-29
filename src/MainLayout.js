import React, { useContext } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';

import { MainScreen, TodoScreen } from './screens';
import { Navbar } from './components';

import { ThemeContext } from './context/theme/themeContext';
import { ScreenContext } from './context/screen/screenContext';

import { StatusBarStyles, PADDING_HORIZONTAL } from './constants/';
import colors from './constants/colors';

export const MainLayout = ({ onLayoutRootView }) => {
  const { theme } = useContext(ThemeContext)
  const { todoId } = useContext(ScreenContext)

  return (
    <View
      style={{
        ...styles.app,
        backgroundColor: colors[theme].appBgColor
      }}
      onLayout={onLayoutRootView}
    >
      <StatusBar
        animated={true}
        backgroundColor={colors[theme].navbarBgColor}
        barStyle={StatusBarStyles[theme]}
      // hidden
      />
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {todoId
          ? <TodoScreen />
          : <MainScreen />
        }
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});

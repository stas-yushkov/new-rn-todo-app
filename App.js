import React, { useEffect, useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { TodoState } from './src/context/todo/TodoState';
import { ScreenState } from './src/context/screen/ScreenState';
import { ThemeState } from './src/context/theme/ThemeState';

import { MainLayout } from './src/MainLayout'

import { Fonts } from './src/constants/';

export default function App() {
  const [fontsLoaded] = useFonts({
    [Fonts.ROBOTO_BOLD]: require('./assets/fonts/Roboto-Bold.ttf'),
    [Fonts.ROBOTO_REGULAR]: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeState>
      <ScreenState>
        <TodoState>
          <MainLayout onLayoutRootView={onLayoutRootView} />
        </TodoState>
      </ScreenState>
    </ThemeState>
  );
}

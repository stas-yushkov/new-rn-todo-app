import React, { useEffect, useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { TodoState } from './src/context/todo/TodoState';
import { ScreenState } from './src/context/screen/ScreenState';

import { MainLayout } from './src/MainLayout'

import { Fonts } from './src/constants/';

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout onLayoutRootView={onLayoutRootView} />
      </TodoState>
    </ScreenState>
  );
}

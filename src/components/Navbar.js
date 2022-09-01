import React, { useContext } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { ThemeContext } from '../context/theme/themeContext';

import { TouchableDependsOfOS } from './ui/TouchableDependsOfOS';
import { TextBold } from './ui/TextBold';

import { ACTIVE_OPACITY_NUM, FontSize } from '../constants';
import colors from '../constants/colors';

export const Navbar = ({ title }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <TouchableDependsOfOS
      activeOpacity={ACTIVE_OPACITY_NUM}
      onPress={toggleTheme}
      accessibilityLabel="Toggle color theme"
    >
      <View
        style={{
          ...styles.navbar,
          backgroundColor: Platform.OS === 'ios' ? colors[theme].appBgColor : colors.accentColor,
          ...Platform.select({
            'ios': styles.navbarIos,
            'android': styles.navbarAndroid
          })
        }}
      >
        <TextBold
          color={Platform.OS === 'ios' ? colors.accentColor : colors.WHITE}
          fontSize={FontSize.L}
        >
          {title}
        </TextBold>
      </View>
    </TouchableDependsOfOS >
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  navbarIos: {
    borderBottomWidth: 1
  },
  navbarAndroid: {
  },
})

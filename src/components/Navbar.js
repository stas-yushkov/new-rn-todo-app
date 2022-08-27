import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY_NUM, FontSize } from '../constants';
import colors from '../constants/colors';
import { TextBold } from './ui';

export const Navbar = ({ title, toggleTheme, theme, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY_NUM}
      onPress={toggleTheme}
      accessibilityLabel="Toggle color theme"
    >
      <View
        style={{
          ...styles.navbar,
          backgroundColor: colors[theme].navbarBgColor,
          ...style
        }}
      >
        <TextBold
          theme={theme}
          color={colors[theme].accentColor}
          fontSize={FontSize.L}
        >
          {title}
        </TextBold>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
})

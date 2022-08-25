import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY_NUM, FONT_SIZE } from '../constants';
import colors from '../constants/colors';
import { TextBold } from './ui';

export const Navbar = ({ title, toggleTheme, theme }) => {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY_NUM}
      onPress={toggleTheme}
      accessibilityLabel="Toggle color theme"
    >
      <View
        style={{
          ...styles.navbar,
          backgroundColor: colors[theme].NAVBAR_BG_COLOR
        }}
      >
        <TextBold
          theme={theme}
          color={colors[theme].ACCENT_COLOR}
          fontSize={FONT_SIZE.L}
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
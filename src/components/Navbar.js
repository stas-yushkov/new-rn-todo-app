import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../constants/colors';
import { DEFAULT_COLOR_THEME } from '../constants/';

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors[DEFAULT_COLOR_THEME].NAVBAR_BG_COLOR,
    paddingBottom: 10,
  },
  text: {
    color: colors[DEFAULT_COLOR_THEME].ACCENT_COLOR,
    fontSize: 26,
  }
})
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY_NUM } from '../constants';
import colors from '../constants/colors';


export const Navbar = ({ title, toggleTheme, theme }) => {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY_NUM} onPress={toggleTheme} >
      <View
        style={{
          ...styles.navbar,
          backgroundColor: colors[theme].NAVBAR_BG_COLOR
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: colors[theme].ACCENT_COLOR
          }}
        >
          {title}
        </Text>
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
  text: {
    fontSize: 26,
  }
})
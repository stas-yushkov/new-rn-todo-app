import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
    backgroundColor: '#282c34',
    paddingBottom: 10,
  },
  text: {
    color: '#c678dd',
    fontSize: 26,
  }
})
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';

export const AppLoader = () => (
  <View style={styles.center} >
    <ActivityIndicator color={colors.accentColor} size="large" />
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
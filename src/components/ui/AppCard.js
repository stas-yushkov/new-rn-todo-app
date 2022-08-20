import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DEFAULT_COLOR_THEME } from "../../constants";
import colors from "../../constants/colors";

export const AppCard = ({ children, style }) => {
  return (
    <View style={{ ...styles.default, ...style }}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: colors[DEFAULT_COLOR_THEME].ACCENT_COLOR,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
    backgroundColor: colors[DEFAULT_COLOR_THEME].APP_BG_COLOR,
    borderRadius: 10,
  }
})
import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../constants/colors";

export const AppCard = ({ children, style, theme }) => {
  return (
    <View
      style={
        {
          ...styles.default,
          shadowColor: colors[theme].SHADOW_COLOR,
          backgroundColor: colors[theme].APP_BG_COLOR,
          ...style
        }
      }
    >
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
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
    borderRadius: 10,
  }
})
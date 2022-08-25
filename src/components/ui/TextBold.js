import React from "react";
import { Text } from "react-native";

import { FONTS } from "../../constants";
import colors from "../../constants/colors";

export const TextBold = ({ theme, color, fontSize, textAlign, children }) => {
  return (
    <Text
      style={{
        fontFamily: FONTS.ROBOTO_BOLD,
        color: color || colors[theme].TEXT_COLOR,
        fontSize: fontSize || 14,
        textAlign: textAlign || 'center',

      }}
    >
      {children}
    </Text>
  );
};

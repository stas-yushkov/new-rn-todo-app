import React from "react";
import { Text } from "react-native";

import { FONTS, FONT_SIZE } from "../../constants";
import colors from "../../constants/colors";

export const TextRegular = ({ theme, style, color, fontSize, textAlign, children }) => (
  <Text
    style={{
      fontFamily: FONTS.ROBOTO_REGULAR,
      color: color || colors[theme].TEXT_COLOR,
      fontSize: fontSize || FONT_SIZE.S,
      textAlign: textAlign || 'center',
      ...style
    }}
  >
    {children}
  </Text>
);

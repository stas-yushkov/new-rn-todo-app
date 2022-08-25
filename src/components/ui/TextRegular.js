import React from "react";
import { Text } from "react-native";

import { FONTS } from "../../constants";
import colors from "../../constants/colors";

export const TextRegular = ({ theme, color, fontSize, textAlign, children }) => {
  return (
    <Text
      style={{
        fontFamily: FONTS.ROBOTO_REGULAR,
        color: color || colors[theme].TEXT_COLOR,
        fontSize: fontSize || 14,
        textAlign: textAlign || 'center',
      }}
    >
      {children}
    </Text>
  );
};

import React from 'react';
import { Text } from 'react-native';

import { Fonts, FontSize } from '../../constants';
import colors from '../../constants/colors';

export const TextRegular = ({ theme, style, color, fontSize, textAlign, children }) => (
  <Text
    style={{
      fontFamily: Fonts.ROBOTO_REGULAR,
      color: color || colors[theme].textColor,
      fontSize: fontSize || FontSize.S,
      textAlign: textAlign || 'center',
      ...style
    }}
  >
    {children}
  </Text>
);

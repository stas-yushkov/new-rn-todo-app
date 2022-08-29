import React, { useContext } from 'react';
import { Text } from 'react-native';

import { ThemeContext } from '../../context/theme/themeContext';

import { Fonts, FontSize } from '../../constants';
import colors from '../../constants/colors';

export const TextRegular = ({ style, color, fontSize, textAlign, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
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
  )
};

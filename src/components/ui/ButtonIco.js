import React from 'react';
import { StyleSheet } from 'react-native';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  Fontisto,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons/'

import { TextBold } from './TextBold';

import { ACTIVE_OPACITY_NUM, Icons } from '../../constants';
import colors from '../../constants/colors';

export const ButtonIco = (props) => {
  const {
    name,
    title,
    theme,
    style,
    onPress,
    children,
    fontSize,
    textAlign,
    textStyle,
    size = 20,
    borderRadius = 5,
    accessibilityLabel,
    iconsSet = Icons.ANT_DESIGN,
    color = colors[theme].buttons.neutral.text,
    bgColor = colors[theme].buttons.neutral.bg,
    iconStyle = { marginRight: (props.title || props.children) ? 10 : 0 },
  } = props;

  const SomeButton = (props) => {
    switch (iconsSet) {
      case Icons.ANT_DESIGN:
        return (<AntDesign.Button {...props}></AntDesign.Button>)
      case Icons.ENTYPO:
        return (<Entypo.Button {...props}></Entypo.Button>)
      case Icons.EVIL_ICONS:
        return (<EvilIcons.Button {...props}></EvilIcons.Button>)
      case Icons.FEATHER:
        return (<Feather.Button {...props}></Feather.Button>)
      case Icons.FONTISTO:
        return (<Fontisto.Button {...props}></Fontisto.Button>)
      case Icons.FONT_AWESOME:
        return (<FontAwesome.Button {...props}></FontAwesome.Button>)
      case Icons.FONT_AWESOME_5:
        return (<FontAwesome5.Button {...props}></FontAwesome5.Button>)
      case Icons.FOUNDATION:
        return (<Foundation.Button {...props}></Foundation.Button>)
      case Icons.IONICONS:
        return (<Ionicons.Button {...props}></Ionicons.Button>)
      case Icons.MATERIAL_COMMUNITY_ICONS:
        return (<MaterialCommunityIcons.Button {...props}></MaterialCommunityIcons.Button>)
      case Icons.MATERIAL_ICONS:
        return (<MaterialIcons.Button {...props}></MaterialIcons.Button>)
      case Icons.OCTICONS:
        return (<Octicons.Button {...props}></Octicons.Button>)
      case Icons.SIMPLE_LINE_ICONS:
        return (<SimpleLineIcons.Button {...props}></SimpleLineIcons.Button>)
      case Icons.ZOCIAL:
        return (<Zocial.Button {...props}></Zocial.Button>)
      default:
        break;
    }
  }

  return (
    <SomeButton
      style={{
        ...styles.button,
        ...style
      }}
      iconStyle={iconStyle}
      borderRadius={borderRadius}
      onPress={onPress}
      name={name}
      activeOpacity={ACTIVE_OPACITY_NUM}
      accessibilityLabel={accessibilityLabel}
      backgroundColor={bgColor}
      size={size}
    >
      <TextBold
        color={color}
        fontSize={fontSize}
        textAlign={textAlign}
        theme={theme}
        style={textStyle}
      >
        {title || children}
      </TextBold>
    </SomeButton >
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

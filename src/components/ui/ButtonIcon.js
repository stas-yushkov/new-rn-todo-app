import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
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
} from '@expo/vector-icons/';

import { ThemeContext } from '../../context/theme/themeContext';

import { TouchableDependsOfOS } from './TouchableDependsOfOS';
import { TextBold } from './TextBold';

import { ACTIVE_OPACITY_NUM, Icons } from '../../constants';
import colors from '../../constants/colors';

export const ButtonIcon = (props) => {
  const { theme } = useContext(ThemeContext);
  const {
    name,
    title,
    style,
    onPress,
    children,
    fontSize = 20,
    textStyle,
    size = 20,
    borderRadius = 5,
    accessibilityLabel,
    iconsSet = Icons.ANT_DESIGN,
    color = colors[theme].buttons.neutral.text,
    bgColor = colors[theme].buttons.neutral.bg,
    iconStyle = { marginRight: (props.title || props.children) && props.name ? 10 : 0 },
  } = props;

  const Icon = (props) => {
    switch (iconsSet) {
      case Icons.ANT_DESIGN:
        return (<AntDesign {...props}></AntDesign>)
      case Icons.ENTYPO:
        return (<Entypo {...props}></Entypo>)
      case Icons.EVIL_ICONS:
        return (<EvilIcons {...props}></EvilIcons>)
      case Icons.FEATHER:
        return (<Feather {...props}></Feather>)
      case Icons.FONTISTO:
        return (<Fontisto {...props}></Fontisto>)
      case Icons.FONT_AWESOME:
        return (<FontAwesome {...props}></FontAwesome>)
      case Icons.FONT_AWESOME_5:
        return (<FontAwesome5 {...props}></FontAwesome5>)
      case Icons.FOUNDATION:
        return (<Foundation {...props}></Foundation>)
      case Icons.IONICONS:
        return (<Ionicons {...props}></Ionicons>)
      case Icons.MATERIAL_COMMUNITY_ICONS:
        return (<MaterialCommunityIcons {...props}></MaterialCommunityIcons>)
      case Icons.MATERIAL_ICONS:
        return (<MaterialIcons {...props}></MaterialIcons>)
      case Icons.OCTICONS:
        return (<Octicons {...props}></Octicons>)
      case Icons.SIMPLE_LINE_ICONS:
        return (<SimpleLineIcons {...props}></SimpleLineIcons>)
      case Icons.ZOCIAL:
        return (<Zocial {...props}></Zocial>)
      default:
        break;
    }
  };

  return (
    <TouchableDependsOfOS
      onPress={onPress}
      activeOpacity={ACTIVE_OPACITY_NUM}
      accessibilityLabel={accessibilityLabel}
    >
      <View
        style={{
          ...styles.button,
          ...style,
          backgroundColor: bgColor,
          borderRadius: borderRadius,
        }}
      >
        <Icon
          style={iconStyle}
          name={name}
          color={color}
          size={size}
        />
        <TextBold
          color={color}
          fontSize={fontSize}
          style={textStyle}
        >
          {title || children}
        </TextBold>
      </View>
    </TouchableDependsOfOS>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

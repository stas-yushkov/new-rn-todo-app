import React from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export const TouchableDependsOfOS = (props) => {
  return Platform.OS === 'ios' ? (<TouchableOpacity {...props}></TouchableOpacity >) : (<TouchableNativeFeedback {...props}></TouchableNativeFeedback >)
};

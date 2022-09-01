import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, TextInput, Modal, Alert, Keyboard } from 'react-native';

import { ThemeContext } from '../../context/theme/themeContext';

import { ButtonIcon } from '../ui/ButtonIcon';

import colors from '../../constants/colors';

export const AddModal = ({ visible, onCancel, onSave, style }) => {
  const { theme } = useContext(ThemeContext);
  const [title, setTitle] = useState('')

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error!',
        `Todo title should be 3+ sumbols long. Now title is ${title.trim().length
        } symbol(s) long. Please specify proper todo title`
      )
    } else {
      onSave(title.trim());
      Keyboard.dismiss();
      console.log(`${(new Date).toLocaleTimeString()}: ${title.trim()}`);
    }
  }

  const cancelHandler = () => {
    setTitle('');
    onCancel();
  }

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={false}
    >
      <View style={{ ...styles.wrap, backgroundColor: colors[theme].appBgColor, style }}>
        <TextInput
          style={{
            ...styles.input,
            borderBottomColor: colors.accentColor,
            color: colors[theme].textColor,
          }}
          value={title}
          onChangeText={setTitle}
          placeholder="Please specify todo title"
          placeholderTextColor={colors[theme].placeholderTextColor}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <ButtonIcon
            onPress={cancelHandler}
            title="Cancel"
            bgColor={colors[theme].buttons.negative}
            name="closecircleo"
            accessibilityLabel="Cancel"
          />
          <ButtonIcon
            onPress={saveHandler}
            title="Save"
            bgColor={colors[theme].buttons.positive}
            name="checkcircleo"
            accessibilityLabel="Save todo"
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Alert, Keyboard } from 'react-native';

import { ButtonIco } from '../ui';

import colors from '../../constants/colors';

export const EditModal = ({ visible, onCancel, theme, value, onSave, style }) => {
  const [title, setTitle] = useState(value)

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

  useEffect(() => {
    setTitle(value);
    return () => setTitle(value);
  }, [visible])

  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent={false}
    >
      <View style={{ ...styles.wrap, backgroundColor: colors[theme].appBgColor, ...style }}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{
            ...styles.input,
            borderBottomColor: colors[theme].accentColor,
            color: colors[theme].textColor,
          }}
          placeholder='Please specify todo title'
          placeholderTextColor={colors[theme].placeholderTextColor}
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <ButtonIco
            onPress={onCancel}
            theme={theme}
            title="Cancel"
            bgColor={colors[theme].buttons.negative}
            name="closecircleo"
            accessibilityLabel="Cancel"
          />
          <ButtonIco
            onPress={saveHandler}
            theme={theme}
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

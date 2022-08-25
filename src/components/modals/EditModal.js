import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';

import colors from '../../constants/colors';


export const EditModal = ({ visible, onCancel, theme, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      console.log('Error');
      Alert.alert(
        'Error!',
        `Todo title should be 3+ sumbols long. Now title is ${title.trim().length
        } symbol(s) long. Please specify proper todo title`
      )
    } else {
      console.log('onSave');
      onSave(title.trim())
    }
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent={false}
    >
      <View style={{ ...styles.wrap, backgroundColor: colors[theme].APP_BG_COLOR }}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{
            ...styles.input,
            borderBottomColor: colors[theme].ACCENT_COLOR,
            color: colors[theme].TEXT_COLOR,
          }}
          placeholder='Please specify todo title'
          placeholderTextColor={colors[theme].PLACEHOLDER_TEXT_COLOR}
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button title='Cancel' onPress={onCancel} color={colors[theme].DANGER_COLOR} />
          <Button title='Save' onPress={saveHandler} color={colors[theme].ACCENT_COLOR} />
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
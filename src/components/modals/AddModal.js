import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';

import colors from '../../constants/colors';


export const AddModal = ({ visible, onCancel, theme, onSave }) => {
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
      setTitle('');
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
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
          placeholder="Please specify todo title"
          placeholderTextColor={colors[theme].PLACEHOLDER_TEXT_COLOR}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onCancel} color={colors[theme].DANGER_COLOR} accessibilityLabel="Cancel" />
          <Button title="Save" onPress={saveHandler} color={colors[theme].ACCENT_COLOR} accessibilityLabel="Save" />
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
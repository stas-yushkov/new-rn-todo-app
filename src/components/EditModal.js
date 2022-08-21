import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import colors from '../constants/colors';

export const EditModal = ({ visible, onCancel, theme }) => {

  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent={false}
    >
      <View style={{ ...styles.wrap, backgroundColor: colors[theme].APP_BG_COLOR }}>
        <TextInput
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
          <Button title='Save' color={colors[theme].ACCENT_COLOR} />
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
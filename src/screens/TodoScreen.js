import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { AppCard } from '../components/ui/AppCard';
import { TextBold } from '../components/ui/TextBold';
import { ButtonIcon } from '../components/ui/ButtonIcon';
import { EditModal } from '../components/modals/';
import { FontSize } from '../constants';
import colors from '../constants/colors';
export const TodoScreen = ({ todo, goBack, removeTodo, editTodo, theme }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = title => {
    editTodo({ id: todo.id, title });
    setModal(false);
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
        theme={theme}
      />
      <AppCard theme={theme} style={styles.card}>
        <TextBold
          style={styles.title}
          theme={theme}
          fontSize={FontSize.L}
          color={colors[theme].textColor}
        >
          {todo.title}
        </TextBold>
        <ButtonIcon
          style={styles.editBtn}
          onPress={() => setModal(true)}
          theme={theme}
          bgColor={colors[theme].buttons.edit}
          name="edit"
          accessibilityLabel="Edit todo"
        />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <ButtonIcon
            onPress={goBack}
            theme={theme}
            name="back"
            accessibilityLabel="Go back"
          />
        </View>
        <View style={styles.button}>
          <ButtonIcon
            onPress={() => { removeTodo(todo.id) }}
            theme={theme}
            bgColor={colors[theme].buttons.negative}
            name="delete"
            accessibilityLabel="Remove todo"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window') < 400 ? 150 : '40%',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: '80%'
  },
  editBtn: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 40,
    height: 40,
  }
})

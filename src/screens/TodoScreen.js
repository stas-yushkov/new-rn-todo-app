import React, { useState, useContext } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { ThemeContext } from '../context/theme/themeContext';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

import { AppCard } from '../components/ui/AppCard';
import { TextBold } from '../components/ui/TextBold';
import { ButtonIcon } from '../components/ui/ButtonIcon';
import { EditModal } from '../components/modals/';

import { FontSize } from '../constants';
import colors from '../constants/colors';

export const TodoScreen = () => {
  const { todos, updateTodo, removeTodo } = useContext(TodoContext);
  const { changeScreen, todoId } = useContext(ScreenContext);
  const { theme } = useContext(ThemeContext);

  const todo = todos.find(todo => todo.id === todoId);

  const [modal, setModal] = useState(false);

  const saveHandler = title => {
    setModal(false);
    updateTodo({ id: todo.id, title });
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />
      <AppCard theme={theme} style={styles.card}>
        <TextBold
          style={styles.title}
          fontSize={FontSize.L}
          color={colors[theme].textColor}
        >
          {todo.title}
        </TextBold>
        <ButtonIcon
          style={styles.editBtn}
          onPress={() => setModal(true)}
          bgColor={colors[theme].buttons.edit}
          name="edit"
          accessibilityLabel="Edit todo"
        />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <ButtonIcon
            onPress={() => changeScreen(null)}
            name="back"
            accessibilityLabel="Go back"
          />
        </View>
        <View style={styles.button}>
          <ButtonIcon
            onPress={() => { removeTodo(todo.id) }}
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

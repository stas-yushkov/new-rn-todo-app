import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { EditModal } from "../components/modals/";

import { AppCard, TextBold } from "../components/ui";
import { FONT_SIZE } from "../constants";

import colors from "../constants/colors";

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
          theme={theme}
          fontSize={FONT_SIZE.L}
          color={colors[theme].TEXT_COLOR}
        >
          {todo.title}
        </TextBold>
        <Button
          title="Edit"
          color={colors[theme].EDIT_BUTTON_COLOR}
          onPress={() => setModal(true)}
          accessibilityLabel="Edit todo"
        />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="Back"
            color={colors[theme].PLACEHOLDER_TEXT_COLOR}
            onPress={goBack}
            accessibilityLabel="Go back"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            color={colors[theme].DANGER_COLOR}
            onPress={() => { removeTodo(todo.id) }}
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
    width: '40%'
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
})
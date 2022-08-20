import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AppCard } from "../components/ui";
import { DEFAULT_COLOR_THEME } from "../constants";
import colors from "../constants/colors";

export const TodoScreen = ({ todo, goBack, removeTodo, editTodo }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button
          title='Edit'
          color={colors[DEFAULT_COLOR_THEME].EDIT_BUTTON_COLOR}
          onPress={editTodo}
        />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title='Back'
            color={colors[DEFAULT_COLOR_THEME].PLACEHOLDER_TEXT_COLOR}
            onPress={goBack}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Remove'
            color={colors[DEFAULT_COLOR_THEME].ALERT_COLOR}
            onPress={() => {
              removeTodo(todo.id);
              goBack();
            }}
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
  title: {
    fontSize: 26,
    color: colors[DEFAULT_COLOR_THEME].TEXT_COLOR,
  }
})
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { AppCard } from "../components/ui";

import colors from "../constants/colors";


export const TodoScreen = ({ todo, goBack, removeTodo, editTodo, theme }) => {
  return (
    <View>
      <AppCard theme={theme} style={styles.card}>
        <Text style={
          {
            ...styles.title,
            color: colors[theme].TEXT_COLOR
          }
        }
        >
          {todo.title}
        </Text>
        <Button
          title='Edit'
          color={colors[theme].EDIT_BUTTON_COLOR}
          onPress={editTodo}
        />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title='Back'
            color={colors[theme].PLACEHOLDER_TEXT_COLOR}
            onPress={goBack}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Remove'
            color={colors[theme].ALERT_COLOR}
            onPress={() => { removeTodo(todo.id) }}
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
  }
})
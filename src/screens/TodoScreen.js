import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { DEFAULT_COLOR_THEME } from "../constants";
import colors from "../constants/colors";

export const TodoScreen = ({ todo, goBack, removeTodo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
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
  }
})
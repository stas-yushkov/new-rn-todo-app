import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { AddTodo, Todo } from "../components";


export const MainScreen = ({ addTodo, todos, removeTodo, openTodo, theme }) => {
  return (
    <View style={styles.container}>
      <AddTodo theme={theme} onSubmit={addTodo} />

      <FlatList
        style={styles.scroll}
        data={todos}
        renderItem={({ item }) => (
          <Todo
            theme={theme}
            todo={item}
            onRemove={removeTodo}
            onOpen={openTodo}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  }
})
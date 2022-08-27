import React, { useState } from "react";
import { StyleSheet, FlatList, View, Image } from "react-native";

import { AddTodo, Todo } from "../components";
import { TextRegular, TouchableDependsOfOS } from "../components/ui/";
import { AddModal } from "../components/modals/";

import { ACTIVE_OPACITY_NUM, FontSize } from "../constants";
import colors from "../constants/colors";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo, theme }) => {
  const [modal, setModal] = useState(false);

  let content = (
    <FlatList
      data={todos}
      style={styles.scroll}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Todo
          theme={theme}
          todo={item}
          onRemove={removeTodo}
          onOpen={openTodo}
        />
      )}
    />
  );

  const saveHandler = title => {
    addTodo(title);
    setModal(false);
  }

  if (todos.length === 0) {
    content = (
      <TouchableDependsOfOS
        activeOpacity={ACTIVE_OPACITY_NUM}
        onPress={() => setModal(true)}
      >
        <View style={styles.wrapper}>
          <View style={styles.thumb}>
            <Image
              style={styles.img}
              source={require('../../assets/images/todo.png')}
            />
          </View>
          <TextRegular fontSize={FontSize.L} theme={theme} color={colors[theme].accentColor}>
            There are no todos yet. Please add todo
          </TextRegular>
        </View>
      </TouchableDependsOfOS>
    )
  }

  return (
    <View style={styles.container}>
      <AddTodo theme={theme} onSubmit={addTodo} />
      <AddModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
        theme={theme}
      />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  thumb: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
})

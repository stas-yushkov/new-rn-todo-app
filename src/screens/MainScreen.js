import React, { useState } from "react";
import { StyleSheet, FlatList, View, Image, Text, TouchableOpacity } from "react-native";

import { AddTodo, Todo } from "../components";
import { AddModal } from "../components/modals/";
import { ACTIVE_OPACITY_NUM } from "../constants";
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
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY_NUM}
        onPress={() => setModal(true)}
      >
        <View style={styles.thumb}>
          <Image
            style={styles.img}
            source={require('../../assets/add-item-512x512.png')}
          />
        </View>
        <Text style={{ ...styles.title, color: colors[theme].TEXT_COLOR }}>
          There are no todos yet. Please add todo
        </Text>
      </TouchableOpacity>
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
    height: 300
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
  }
})
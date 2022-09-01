import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, FlatList, View, Image, Dimensions } from 'react-native';

import { ThemeContext } from '../context/theme/themeContext';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

import { AddTodo, Todo } from '../components';
import { AddModal } from '../components/modals/';
import { TouchableDependsOfOS } from '../components/ui/TouchableDependsOfOS';
import { TextRegular } from '../components/ui/TextRegular';
import { AppLoader } from '../components/ui/AppLoader';
import { ButtonIcon } from '../components/ui/ButtonIcon';

import { ACTIVE_OPACITY_NUM, FontSize, PADDING_HORIZONTAL } from '../constants';
import colors from '../constants/colors';

export const MainScreen = () => {
  const { addTodo, todos, removeTodo, fetchTodos, loading, error } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const { theme } = useContext(ThemeContext);

  const [modal, setModal] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 2 * PADDING_HORIZONTAL);

  let content = (
    <View style={{
      width: deviceWidth,
      flex: 1,
    }}>
      <FlatList
        data={todos}
        style={styles.scroll}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            onRemove={removeTodo}
            onOpen={changeScreen}
          />
        )}
      />
    </View>
  );

  const saveHandler = title => {
    addTodo(title);
    setModal(false);
  };

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
          <TextRegular fontSize={FontSize.L} color={colors.accentColor}>
            There are no todos yet. Please add todo
          </TextRegular>
        </View>
      </TouchableDependsOfOS>
    )
  };

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - 2 * PADDING_HORIZONTAL;
      setDeviceWidth(width);
    }

    const subscription = Dimensions.addEventListener('change', update);

    return () => {
      subscription.remove();
    }
  });

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

  if (loading) {
    return <AppLoader />
  }

  if (error) {
    return (
      <View style={styles.center}>
        <TextRegular
          color={colors.dangerColor}
          fontSize={20}
        >
          {error}
        </TextRegular>
        <ButtonIcon
          name="reload1"
          title="Retry"
          bgColor={colors.accentColor}
          onPress={loadTodos}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AddTodo onSubmit={addTodo} />
      <AddModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import SingleTodoScreen from './SingleTodoScreen';
const ActiveStack = createStackNavigator();
const SingleTodoStack = createStackNavigator();

import { TODOS } from '../data.js';

import Item from '../components/Item';

function ActiveScreen({navigation, route}) {
  const data = TODOS.filter((item) => item.status === 'Active');
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Text>{`Todo List(${data.length})`}</Text>
          </View>
        }
        data={data}
        renderItem={
          ({ item }) => 
          <Item 
            item={item} 
            navigation={navigation} 
            route={route}
            data={data} 
          />
        }
        keyExtractor={item => `${item.id}`}
      >
      </FlatList>
    </View>
  );
}

export default function Active() {
  return (
    <ActiveStack.Navigator>
      <ActiveStack.Screen name="Active" component={ActiveScreen} />
      <SingleTodoStack.Screen name="SingleTodo" component={SingleTodoScreen} />
    </ActiveStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  keyboard: {
    flex: 1,
    
  },
  item: {
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    marginBottom: 36,  
    backgroundColor: "white", 
    marginTop: 12,
    margin: 6,
  },
  btnContainer: {
    marginBottom: 100,
  }
})
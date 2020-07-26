import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, KeyboardAvoidingView, Button, Platform, } from 'react-native';
import { FlatList, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import { TODOS } from '../data.js';
import Item from '../components/Item';

import SingleTodoScreen from './SingleTodoScreen';
import CompleteScreen from './CompleteScreen';

const AllStack = createStackNavigator();
const SingleTodoStack = createStackNavigator();
const CompleteStack = createStackNavigator();


function addTodoItem(setData, data, currText, setCurrText) {
  setData([...data, {id: data.length+1, body: currText, status: 'Active'}]);
  setCurrText('');
}

function handleStatus(setData, data, item) {
  let index = data.findIndex( ele => ele === item);
  let changeItem = {...item, status: item.status === 'Done' ? 'Active' : 'Done'};
  console.log(changeItem);
  setData([...data.slice(0,index),changeItem, ...data.slice(index+1)]);
}

function AllScreen({navigation, route}) {
  const [data, setData] = useState(TODOS);
  const [currText, setCurrText] = useState('');
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.keyboard}
    >
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
              setData={setData} 
              handleStatus={handleStatus}
            />
          }
          keyExtractor={item => `${item.id}`}
          ListFooterComponent={
            <View>
              <TextInput
                placeholder="Add todo item"
                value={currText}
                autoFocus={true}
                style={styles.textInput}
                onChangeText={(text) => setCurrText(text)}
              />
              <View>
                <Button 
                  title="Submit" 
                  onPress={() => addTodoItem(setData, data, currText, setCurrText)}
                  style={styles.btnContainer} 
                />
              </View>
            </View>
          }
        >
        </FlatList>
      </View>
    </KeyboardAvoidingView>
  );
}

export default function All() {
  return (
    <AllStack.Navigator>
      <AllStack.Screen name="All" component={AllScreen} />
      <SingleTodoStack.Screen name="SingleTodo" component={SingleTodoScreen} />
      <CompleteStack.Screen name="Complete" component={CompleteScreen} />
    </AllStack.Navigator>
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
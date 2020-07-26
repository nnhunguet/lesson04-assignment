import React, {useState} from 'react';
import { Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function choiceBackgroundColor(type) {
  return type === 'Done' ? "#cf1b1b" : "#93b5e1";
}

export default function Item({ item, navigation, route, handleStatus, setData, data }){
  return(
    <View style={{backgroundColor: choiceBackgroundColor(item.status), paddingVertical: 12, margin: 6, borderRadius: 6,}}>
      <TouchableOpacity
        onPress={() => (
          handleStatus(setData, data, item),
          navigation.navigate('SingleTodo', {
            item: item,
          })
        )}
      >
        <Text style={{color: "#fff", textAlign: "center"}}>{`${item.id}: ${item.body}`}</Text>
      </TouchableOpacity>    
    </View>
  )
}
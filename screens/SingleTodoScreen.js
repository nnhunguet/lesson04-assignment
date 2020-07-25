import * as React from 'react';
import { Text, View } from 'react-native';

function changeStatus(type) {
  return type === 'Done' ? 'Active' : 'Done';
}

export default function SingleTodoScreen({route}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{route.params.item.body}</Text>
      <Text>{route.params.item.id}</Text>
      <Text>{route.params.item.status}</Text>
    </View>
  );
}

 
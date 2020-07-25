import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

const ActiveStack = createStackNavigator();

function ActiveScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Acctive Screen</Text>
    </View>
  );
}

export default function Active() {
  return (
    <ActiveStack.Navigator>
      <ActiveStack.Screen name="Active" component={ActiveScreen} />
    </ActiveStack.Navigator>
  );
}
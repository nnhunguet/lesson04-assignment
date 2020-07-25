import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

const CompleteStack = createStackNavigator();

function CompleteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Complete Screen!</Text>
    </View>
  );
}

export default function Complete() {
  return (
    <CompleteStack.Navigator>
      <CompleteStack.Screen name="Complete" component={CompleteScreen} />
    </CompleteStack.Navigator>
  );
}
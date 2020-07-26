import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Complete from './screens/CompleteScreen';
import All from './screens/AllScreen';
import Active from './screens/ActiveScreen';

import { TODOS } from './data.js';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused}) => {
            let icon;
            switch(route.name){
              case "Complete":
                icon = focused ? require('./assets/tickActive.png') : require('./assets/tick.png');
                break;
              case "All":
                icon = focused ? require('./assets/addActive.png') : require('./assets/add.png');
                break;
              case "Active":
                icon = focused ? require('./assets/activeActive.png') : require('./assets/active.png');
                break;
            }
            return <Image source={icon} style={{width: 30, height: 30, resizeMode: 'contain',}}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3498DB',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Complete" component={Complete} />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Active" component={Active} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
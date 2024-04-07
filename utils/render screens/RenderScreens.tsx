import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notes from '../../screens/notes/Notes'
import Tasks from '../../screens/tasks/Tasks'
import Tabs from '../tabs/Tabs'
import Post from '../../screens/post/Post'

const Stack = createNativeStackNavigator()

const RenderScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='tab' component={Tabs} />
        <Stack.Screen name='home' component={Notes} />
        <Stack.Screen name='tasks' component={Tasks} />
        <Stack.Screen name='posts' component={Post} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RenderScreens
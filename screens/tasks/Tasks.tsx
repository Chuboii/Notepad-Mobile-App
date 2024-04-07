import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/search/SearchInput'
import NoteBoxes from '../../components/note boxes/NoteBoxes'
import { styles } from './Tasks.style'
import AddNote from '../../components/add note/AddNote'
import TasksBoxes from '../../components/task boxes/TasksBoxes'

const Tasks = () => {
  return (
      <SafeAreaView style={ styles.container}>
          <Text style={styles.text}>Tasks</Text>
      <SearchInput placeholder='Search Tasks'/>
          <TasksBoxes />
          <AddNote/>
    </SafeAreaView>
  )
}

export default Tasks
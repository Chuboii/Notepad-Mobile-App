import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/search/SearchInput'
import NoteBoxes from '../../components/note boxes/NoteBoxes'
import { styles } from './Tasks.style'
import AddNote from '../../components/add note/AddNote'
import TasksBoxes from '../../components/task boxes/TasksBoxes'

const Tasks = () => {
  const [enableTaskBoard, setEnableTaskBoard] = useState(false)

  const taskBoardEnabler = () => setEnableTaskBoard(true)
 
  return (
      <SafeAreaView style={ styles.container}>
          <Text style={styles.text}>Tasks</Text>
      <SearchInput placeholder='Search Tasks'/>
          <TasksBoxes />
          <AddNote enableTaskBoard={enableTaskBoard} redirect={'tasks'}/>
    </SafeAreaView>
  )
}

export default Tasks
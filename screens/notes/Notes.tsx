import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/search/SearchInput'
import NoteBoxes from '../../components/note boxes/NoteBoxes'
import { styles } from './Notes.style'
import AddNote from '../../components/add note/AddNote'

const Notes = () => {
  return (
      <SafeAreaView style={ styles.container}>
          <Text style={styles.text}>Notes</Text>
          <SearchInput placeholder={'Search notes'}/>
          <NoteBoxes />
          <AddNote/>
    </SafeAreaView>
  )
}

export default Notes
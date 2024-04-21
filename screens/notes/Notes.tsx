import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/search/SearchInput'
import NoteBoxes from '../../components/note boxes/NoteBoxes'
import { styles } from './Notes.style'
import AddNote from '../../components/add note/AddNote'
import { DataContext } from '../../context/DataContext'

const Notes = ({navigation}) => {
  const { setExtractedData, extractedData } = useContext(DataContext)
  

  return (
      <SafeAreaView style={ styles.container}>
          <Text style={styles.text}>Notes</Text>
          <SearchInput placeholder={'Search notes'}/>
      <NoteBoxes navigation={navigation} />
          <AddNote enableTaskBoard={false} navigation={navigation} redirect={'posts'}/>
    </SafeAreaView>
  )
}

export default Notes
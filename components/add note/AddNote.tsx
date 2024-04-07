import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './AddNote.style';
import { useNavigation } from '@react-navigation/native';
import TaskBoard from '../add tasks board/TaskBoard';

const AddNote = ({redirect, enableTaskBoard}) => {
    const navigation = useNavigation() 
    
    const navigateToPost = () => {
        navigation.navigate(redirect)
    }

  return (
    <>
      {enableTaskBoard && <TaskBoard />}
    <TouchableOpacity onPress={navigateToPost} style={styles.container}>
          <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </>
  )
}

export default AddNote
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './AddNote.style';
import { useNavigation } from '@react-navigation/native';
import TaskBoard from '../add tasks board/TaskBoard';

const AddNote = ({ redirect, enableTaskBoard, navigation }) => {
  const [isClicked, setIsClicked] = useState(false)
  
  useEffect(() => {
    setIsClicked(false)
  }, [])
    
  const navigateToPost = () => {
    if (enableTaskBoard) {
      setIsClicked(true)
    }
    else {
      setIsClicked(false)
      navigation.navigate(redirect)
    }
  }


  return (
    <>
      {isClicked && <TaskBoard setIsClicked={setIsClicked}/>}
    <TouchableOpacity onPress={navigateToPost} style={styles.container}>
          <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </>
  )
}

export default AddNote
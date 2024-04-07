import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './AddNote.style';
import { useNavigation } from '@react-navigation/native';

const AddNote = () => {
    const navigation = useNavigation() 
    
    const navigateToPost = () => {
        navigation.navigate("posts")
    }

  return (
    <TouchableOpacity onPress={navigateToPost} style={styles.container}>
          <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>
  )
}

export default AddNote
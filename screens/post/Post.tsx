import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './Post.style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Post = () => {
    const navigation = useNavigation()
    


  return (
    <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.header}>
          <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <TextInput placeholder='Title' style={ styles.input } />
          <TextInput
        style={styles.textarea}
        multiline
        placeholder="Start typing..."
      />
    </SafeAreaView>
  )
}

export default Post
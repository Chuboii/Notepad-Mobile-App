import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './Post.style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataContext } from '../../context/DataContext';

const Post = ({navigation}) => {
  const { extractedData, titleValue, setTitleValue, contentValue, setContentValue } = useContext(DataContext)

  
  // useEffect(() => {
  
  //   if (navigation.getState().routes[1].name === "posts") {
  //     setTitleValue("")
  //     setContentValue("")
  //   }
  //   else {
  //     setTitleValue(extractedData.title)
  //     setContentValue(extractedData.subTitle)
  //   }
  // }, [])



  return (
    <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.header}>
          <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <TextInput value={''} onChangeText={() => null} placeholder='Title' style={ styles.input } />
          <TextInput
        style={styles.textarea}
        value={contentValue}
        onChangeText={(content) => setContentValue(content)}
        multiline
        placeholder="Start typing..."
      />
    </SafeAreaView>
  )
}

export default Post
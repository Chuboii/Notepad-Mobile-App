import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { CheckBox } from 'react-native-elements'
import { styles } from './TaskBoard.style'

const TaskBoard = () => {
  return (
      <View style={styles.container}>
          <View style={styles.wrapper}>
              <CheckBox/>
              <TextInput style={styles.input} placeholder='kkshdhshi'/>
          </View>
          <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>Done</Text>
          </TouchableOpacity>
    </View>
  )
}

export default TaskBoard
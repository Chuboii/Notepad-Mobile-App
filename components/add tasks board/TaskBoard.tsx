import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { styles } from './TaskBoard.style'

const TaskBoard = ({ setIsClicked }) => {
    const [value, setValue] = useState('')

    const disableTaskBoard = () => {
        if (value) {
            setIsClicked(false)
        }
    }

  return (
      <View style={styles.container}>
          <View style={styles.wrapper}>
              <CheckBox/>
              <TextInput value={value} autoCorrect={false} autoFocus={true} onChangeText={(value) => setValue(value)} style={styles.input}/>
          </View>
          <TouchableOpacity onPress={disableTaskBoard} style={styles.btn}>
              <Text style={value ? styles.text : style.text}>Done</Text>
          </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    text: {
        color: "rgba(255,255,255,0.8)",
        fontSize:18
    }
})

export default TaskBoard
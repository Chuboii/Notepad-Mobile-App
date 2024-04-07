import { View, Text, ScrollView, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './TasksBoxes.style'
import { data } from '../../utils/dummydata'
import { CheckBox } from 'react-native-elements'

export default function TasksBoxes() {
    const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={styles.container}>
          <FlatList
              keyExtractor={(data) => String(data.id)}
              data={data}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
                  <View style={styles.wrapper}> 
                      <CheckBox
                          style={styles.checkbox}
                          checked={isChecked}
                          onPress={() => setIsChecked(!isChecked)}
                      />
                  <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
             </View>
              }
          />
    </View>
  )
}
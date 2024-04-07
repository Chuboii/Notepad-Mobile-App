import { View, Text, ScrollView,CheckBox, FlatList, TextInput } from 'react-native'
import React from 'react'
import { styles } from './TasksBoxes.style'
import { data } from '../../utils/dummydata'

export default function TasksBoxes() {
  return (
    <View style={styles.container}>
          <FlatList
              keyExtractor={(data) => String(data.id)}
              data={data}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
                  <View style={styles.wrapper}> 
                    <CheckBox/>
                  <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
             </View>
              }
          />
    </View>
  )
}
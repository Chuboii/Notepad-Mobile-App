import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './NoteBoxes.style'
import { data } from '../../utils/dummydata'

export default function NoteBoxes() {
  return (
    <View style={styles.container}>
          <FlatList
              keyExtractor={(data) => String(data.id)}
              data={data}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
              <TouchableOpacity style={styles.wrapper}> 
                  <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{item.subTitle}</Text>
                  <Text style={styles.text}>{item.date}</Text>
                  </TouchableOpacity>
              }
          />
    </View>
  )
}
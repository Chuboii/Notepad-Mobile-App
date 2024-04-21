import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { styles } from './NoteBoxes.style'
import { useNavigation } from '@react-navigation/native'
import { DataContext } from '../../context/DataContext'

export default function NoteBoxes({navigation}) {
    const {data, extractedData, setExtractedData} = useContext(DataContext)
   

    const enableIndividualNote = (item) => {
        navigation.navigate('posts', {item: item});
    };


  return (
    <View style={styles.container}>
          <FlatList
              keyExtractor={(data) => String(data.id)}
              data={data}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
                  <TouchableOpacity style={styles.wrapper} onPress={() => {
                      enableIndividualNote(item)
              }}> 
                  <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{item.subTitle}</Text>
                  <Text style={styles.text}>{item.date}</Text>
                  </TouchableOpacity>
              }
          />
    </View>
  )
}
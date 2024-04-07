import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './SearchInput.style';

const SearchInput = ({placeholder}) => {
  return (
      <View style={styles.container}>
      <AntDesign style={styles.icon} name="search1"  size={24} color="white" />
      <TextInput placeholder={ placeholder } placeholderTextColor="white" style={ styles.input } />
    </View>
  )
}

export default SearchInput
import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  deck: {
    minHeight: 120,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 0
  },
  name: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 64
  },
  number: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
})

export default function ({ name, numberOfCards }) {
  return (
    <TouchableOpacity style={styles.deck} activeOpacity={.85}>
      <Text style={styles.name} ellipsizeMode='tail' numberOfLines={1}>{name}</Text>
      <Text style={styles.number}>{numberOfCards}</Text>
    </TouchableOpacity>
  )
}

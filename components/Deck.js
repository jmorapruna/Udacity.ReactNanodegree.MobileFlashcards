import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  deck: {
    minHeight: 120,
    justifyContent: 'center',
    backgroundColor: '#2cbff4',
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
    fontSize: 26,
    textAlign: 'center',
  }
})

export default function ({ name, numberOfCards }) {
  return (
    <View style={styles.deck}>
      <Text style={styles.name} ellipsizeMode='tail' numberOfLines={1}>{name}</Text>
      <Text style={styles.number}>{numberOfCards}</Text>
    </View>
  )
}

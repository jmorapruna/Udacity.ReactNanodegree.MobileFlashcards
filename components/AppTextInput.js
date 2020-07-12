import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingHorizontal: 12,
    borderColor: '#0296e5',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2
  }
})

const AppTextInput = (props) => (
  <TextInput
    selectionColor='#0296e5'
    style={styles.textInput}
    {...props} />
)

export default AppTextInput

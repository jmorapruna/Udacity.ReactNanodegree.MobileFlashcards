import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    height: 40,
  }
})

const AppTextInput = (props) => (
  <TextInput
    selectionColor='#0296e5'
    style={styles.textInput}
    {...props} />
)

export default AppTextInput

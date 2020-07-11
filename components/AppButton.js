import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#61dafb',
    borderRadius: 15,
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  }
})

function AppButton({
  text,
  onPress = () => { },
  disabled = false,
}) {
  return (
    <TouchableOpacity
      activeOpacity={.85}
      onPress={onPress}
      disabled={disabled}>
      <View style={[
        styles.button, disabled && styles.disabled
        ]}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AppButton

import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 60,
    borderRadius: 15,
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  primaryColor: {
    backgroundColor: '#0296e5',
  },
  dangerColor: {
    backgroundColor: '#d32b39'
  },
  disabledColor: {
    backgroundColor: '#ccc',
  },
})

function AppButton({
  text,
  onPress = () => { },
  disabled = false,
  colorCode = 'primary'
}) {
  let colorStyle

  if (disabled)
    colorStyle = styles.disabledColor
  else if (colorCode === 'primary')
    colorStyle = styles.primaryColor
  else
    colorStyle = styles.dangerColor

  return (
    <TouchableOpacity
      activeOpacity={.85}
      onPress={onPress}
      disabled={disabled}>
      <View style={[
        styles.button,
        disabled && styles.disabled,
        colorStyle
      ]}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AppButton

import React, { useState, useLayoutEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

})

function AddDeckScreen({ route, navigation, dispatch }) {

  return (
    <View>
      <Text>AddDeckScreen</Text>
    </View>
  )
}

function mapStateToProps({ }, { navigation }) {

  return {
    navigation,
  }
}

export default connect(mapStateToProps)(AddDeckScreen)

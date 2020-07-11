import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {addDeck} from '../state/actions/decks'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AppButton from './AppButton'

const styles = StyleSheet.create({

})

function AddDeckScreen({ navigation }) {
  const dispatch = useDispatch()

  const [newDeckName, setNewDeckName] = useState('')
  const [showMissingDeckNameError, setShowMissingDeckNameError] = useState(false)

  const handleAddDeckPressed = useCallback(() => {
    if (newDeckName.trim().length > 0) {
      setShowMissingDeckNameError(false)
      dispatch(addDeck(newDeckName))
      navigation.pop()
    } else {
      setShowMissingDeckNameError(true)
    }

  }, [newDeckName])

  return (
    <View>
      <Text>Name of the deck</Text>

      <TextInput
        value={newDeckName}
        onChangeText={text => setNewDeckName(text)} />

      {
        showMissingDeckNameError && <Text>The name is required</Text>
      }

      <AppButton
        text='Add deck'
        onPress={handleAddDeckPressed} />
    </View>
  )
}

export default AddDeckScreen

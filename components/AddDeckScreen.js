import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../state/actions/decks'
import { View, Text, StyleSheet } from 'react-native'
import AppButton from './AppButton'
import AppTextInput from './AppTextInput'

const styles = StyleSheet.create({

})

function AddDeckScreen({ decks, navigation, dispatch }) {
  const [newDeckName, setNewDeckName] = useState('')
  const [showMissingDeckNameError, setShowMissingDeckNameError] = useState(false)
  const [showDeckNameAlreadyUsedError, setShowDeckNameAlreadyUsedError] = useState(false)

  const handleAddDeckPressed = useCallback(() => {
    const nameIsMissing = newDeckName.trim().length === 0
    const deckNameAlreadyUsed = !!decks[newDeckName]

    setShowMissingDeckNameError(nameIsMissing)
    setShowDeckNameAlreadyUsedError(deckNameAlreadyUsed)

    if (!nameIsMissing && !deckNameAlreadyUsed) {
      dispatch(addDeck(newDeckName))
      navigation.pop()
    }
  }, [newDeckName])

  return (
    <View>
      <Text>Name of the deck</Text>

      <AppTextInput
        value={newDeckName}
        onChangeText={text => setNewDeckName(text)} />

      {showMissingDeckNameError && <Text>The name is required</Text>}
      {showDeckNameAlreadyUsedError && <Text>This deck name is already used. Choose another one.</Text>}

      <AppButton
        text='Add deck'
        onPress={handleAddDeckPressed} />
    </View>
  )
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddDeckScreen)

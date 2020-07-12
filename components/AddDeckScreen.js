import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../state/actions/decks'
import { View, Text, StyleSheet } from 'react-native'
import AppButton from './AppButton'
import AppTextInput from './AppTextInput'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 20,
    fontWeight: '700'
  },
  field: {
    width: 320,
  },
  errorText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
    width: 220,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#d32b39'
  }
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
      navigation.replace('DeckDetail', { deckName: newDeckName })
    }
  }, [newDeckName])

  return (
    <View style={styles.screen}>

      <View style={styles.field}>
        <Text style={styles.title}>Enter a name for the new deck:</Text>

        <AppTextInput
          value={newDeckName}
          onChangeText={text => setNewDeckName(text)} />

        {showMissingDeckNameError && <Text style={styles.errorText}>The name is required.</Text>}
        {showDeckNameAlreadyUsedError && <Text style={styles.errorText}>This deck name is already used. Choose another one.</Text>}
      </View>

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

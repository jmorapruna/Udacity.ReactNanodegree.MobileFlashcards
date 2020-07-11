import React, { useState, useLayoutEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import { addCardToDeck } from '../state/actions/decks'

const styles = StyleSheet.create({
  missingData: {
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 280,
  }
})

function AddCardToDeckScreen({ route, navigation, dispatch }) {
  const { deckName } = route.params
  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState('')
  const [showMissingFieldError, setShowMissingFieldError] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: deckName
    })
  }, [navigation, deckName])

  const handleAddCardClicked = useCallback(() => {
    if (questionText.trim().length && answerText.trim().length) {
      setShowMissingFieldError(false)
      dispatch(addCardToDeck(deckName, questionText, answerText))
      navigation.pop()
    } else {
      setShowMissingFieldError(true)
    }
  }, [deckName, questionText, answerText])

  return (
    <View>
      <Text>Add a card</Text>

      <Text>Question</Text>
      <TextInput value={questionText} onChangeText={text => setQuestionText(text)} />

      <Text>Answer</Text>
      <TextInput value={answerText} onChangeText={text => setAnswerText(text)} />

      {
        showMissingFieldError && (
          <Text style={styles.missingData}>To add a card, first fill the required question and answer</Text>
        )
      }

      <AppButton
        text='Add card'
        onPress={handleAddCardClicked} />
    </View>
  )
}

function mapStateToProps({ }, { route, navigation }) {
  const { deckName } = route.params

  return {
    deckName,
    navigation,
  }
}

export default connect(mapStateToProps)(AddCardToDeckScreen)

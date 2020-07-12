import React, { useState, useLayoutEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import { addCardToDeck } from '../state/actions/decks'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    fontWeight: '700'
  },
  inputs: {
    width: 280,
    alignSelf: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    marginStart: 2
  },
  field: {
    marginVertical: 10
  },
  missingData: {
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 280,
    fontSize: 15,
    marginTop: 10,
    color: '#d32b39',
    fontWeight: '700'
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
    <View style={styles.screen}>

      <View style={styles.inputs}>

        <Text style={styles.title}>Add a card to the deck:</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Question</Text>
          <AppTextInput value={questionText} onChangeText={text => setQuestionText(text)} multiline={true} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Answer</Text>
          <AppTextInput value={answerText} onChangeText={text => setAnswerText(text)} multiline={true} />
        </View>

        {
          showMissingFieldError && (
            <Text style={styles.missingData}>To add a card, first fill the required question and answer.</Text>
          )
        }
      </View>

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

import React, { useState, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'

function AddCardToDeckScreen({ route, navigation }) {
  const { deckName } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${deckName} - Add a card`
    })
  }, [navigation, deckName])

  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState('')

  return (
    <View>
      <Text>Add a card to the deck {deckName}:</Text>

      <Text>Question</Text>
      <TextInput value={questionText} onChangeText={text => setQuestionText(text)} />

      <Text>Answer</Text>
      <TextInput value={answerText} onChangeText={text => setAnswerText(text)} />
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

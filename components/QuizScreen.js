import React, { useLayoutEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import AppButton from './AppButton'

function QuizScreen({ deck, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: deck.name
    })
  }, [navigation, deck])

  const [questionIndex, setQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)
  const [showFinalScore, setShowFinalScore] = useState(false)

  const question = deck.questions[questionIndex]

  const handleAnswerPressed = (correctly) => {
    setQuestionIndex((questionIndex + 1) % deck.questions.length)
    setShowAnswer(false)

    setNumberOfCorrectAnswers(
      correctly
        ? numberOfCorrectAnswers + 1
        : numberOfCorrectAnswers
    )

    setShowFinalScore(questionIndex === deck.questions.length - 1)
  }

  const handleRepeatQuizPressed = useCallback(() => {
    setQuestionIndex(0)
    setShowAnswer(false)
    setNumberOfCorrectAnswers(0)
    setShowFinalScore(false)
  }, [])

  if (showFinalScore)
    return (
      <View>
        <Text>Score</Text>
        <Text>{numberOfCorrectAnswers} correct answers out of {deck.questions.length}</Text>
        <AppButton text='Repeat quiz' onPress={handleRepeatQuizPressed} />
        <AppButton text='Go back to deck' onPress={() => navigation.pop()} />
      </View>
    )
  else
    return (
      <View>
        <Text>Question {questionIndex + 1} of {deck.questions.length}</Text>
        <Text>{question.question}</Text>

        {
          showAnswer
            ? (
              <View>
                <Text>{question.answer}</Text>
                <Text>Did you answer correctly?</Text>
                <AppButton text='Yes' onPress={() => handleAnswerPressed(true)} />
                <AppButton text='No' onPress={() => handleAnswerPressed(false)} />
              </View>
            ) : (
              <AppButton text='Show answer' onPress={() => setShowAnswer(true)} />
            )
        }

      </View>
    )
}

function mapStateToProps({ decks }, { route, navigation }) {
  const { deckName } = route.params
  const deck = decks[deckName]

  return {
    deck,
    navigation,
  }
}

export default connect(mapStateToProps)(QuizScreen)

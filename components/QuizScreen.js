import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import AppButton from './AppButton'
import FinishedQuizTab from './FinishedQuizTab'

const styles = StyleSheet.create({
  quizPage: {
    alignContent: 'center',
  },
  progressIndicator: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 40,
    marginBottom: 60,
    color: '#555',
    fontWeight: '600'
  },
  questionText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    width: 350,
    fontWeight: '700'
  },
  correctAnswerText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 30
  },
  answerText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    width: 350,
    fontWeight: '700',
  },

  didAnswerCorrectly: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 10
  },
  buttons: {
    marginTop: 100
  },
  showAnswerButtonWrap: {
    marginTop: 60
  },
})

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
      <FinishedQuizTab
        numberOfCorrectAnswers={numberOfCorrectAnswers}
        numberOfTotalAnswers={deck.questions.length}
        handleRepeatQuizPressed={handleRepeatQuizPressed}
        goBackToQuiz={() => navigation.pop()}
      />
    )
  else
    return (
      <View style={styles.quizPage}>

        <Text style={styles.progressIndicator}>Question {questionIndex + 1} / {deck.questions.length}</Text>
        <Text style={styles.questionText}>{question.question}</Text>

        {
          showAnswer
            ? (
              <>
                <Text style={styles.correctAnswerText}>The correct answer is:</Text>
                <Text style={styles.answerText}>{question.answer}</Text>
                <View style={styles.buttons}>
                  <Text style={styles.didAnswerCorrectly}>Did you answer correctly?</Text>

                  <AppButton text='Yes' onPress={() => handleAnswerPressed(true)} />
                  <AppButton text='No' colorCode='danger' onPress={() => handleAnswerPressed(false)} />
                </View>
              </>

            ) : (
              <View style={styles.showAnswerButtonWrap}>
                <AppButton text='Show answer' onPress={() => setShowAnswer(true)} />
              </View>
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

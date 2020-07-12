import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import { clearLocalNotificationAsync, setLocalNotificationAsync } from '../notifications/NotificationsService'

const styles = StyleSheet.create({
  scoreTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 80
  },
  scoreResult: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 70,
    width: 200,
    marginBottom: 60
  },
})

export default function FinishedQuizTab({
  numberOfCorrectAnswers,
  numberOfTotalAnswers,
  handleRepeatQuizPressed,
  goBackToQuiz,
}) {

  useEffect(() => {
    clearLocalNotificationAsync().then(setLocalNotificationAsync)
  }, [])

  return (
    <View>
      <Text style={styles.scoreTitle}>The quiz is over!</Text>
      <Text style={styles.scoreResult}>You answered {numberOfCorrectAnswers} of {numberOfTotalAnswers} questions correctly.</Text>
      <AppButton text='Repeat quiz' onPress={handleRepeatQuizPressed} />
      <AppButton text='Go back to deck' onPress={goBackToQuiz} />
    </View>
  )
}

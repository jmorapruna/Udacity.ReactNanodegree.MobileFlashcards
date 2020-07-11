import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AppButton from '../components/AppButton'


const styles = StyleSheet.create({
  deckName: {
    textAlign: 'center',
  },
  numberOfCards: {
    textAlign: 'center',
  },
  addCardsFirst: {
    textAlign: 'center',
  }
})

function DeckDetailScreen({ deck, navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: deck.name
    })
  }, [navigation, deck])

  const numberOfQuestions = deck.questions.length
  const anyQuestiobns = numberOfQuestions > 0

  return (
    <View>
      <Text style={styles.deckName}>{deck.name}</Text>
      <Text style={styles.numberOfCards}>{numberOfQuestions} cards</Text>
      
      <AppButton
        text='Add card'
        onPress={() => { }} />

      <AppButton
        text='Start quiz'
        onPress={() => { }}
        disabled={!anyQuestiobns} />

      {
        !anyQuestiobns && <Text style={styles.addCardsFirst}>To start a quiz, add some cards first</Text>
      }

    </View>
  )
}

function mapStateToProps({ decks }, { route, navigation }) {
  const { deckName } = route.params
  const deck = decks[deckName]

  return {
    deck,
    route,
    navigation
  }
}

export default connect(mapStateToProps)(DeckDetailScreen)

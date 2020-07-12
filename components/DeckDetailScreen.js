import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AppButton from '../components/AppButton'
import ConfirmDeleteDeckModal from '../components/ConfirmDeleteDeckModal'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  deckName: {
    fontSize: 30,
    maxWidth: 340,
    marginBottom: 40
  },
  numberOfCards: {
    fontSize: 18
  },
  addCardsFirst: {
    fontSize: 16
  },
  deleteDeck: {
    fontSize: 17,
    fontWeight: '700',
    color: '#d32b39'
  }
})

function DeckDetailScreen({ deck, navigation }) {

  if (!deck)
    return <></>

  const [isDeleteModelVisible, setIsDeleteModelVisible] = useState(false)
  const numberOfQuestions = deck.questions.length
  const anyQuestiobns = numberOfQuestions > 0

  useLayoutEffect(() => {
    navigation.setOptions({
      title: deck.name
    })
  }, [navigation, deck])

  let cardsText
  if (numberOfQuestions === 0)
    cardsText = '0 cards'
  else if (numberOfQuestions === 1)
    cardsText = '1 card'
  else
    cardsText = `${numberOfQuestions} cards`

  return (
    <View style={styles.screen}>
      <ConfirmDeleteDeckModal
        deckName={deck.name}
        isVisible={isDeleteModelVisible}
        setIsVisible={setIsDeleteModelVisible}
        popScreen={() => navigation.pop()} />

      <View>
        <Text style={[styles.centerText, styles.deckName]}>{deck.name}</Text>
        <Text style={[styles.centerText, styles.numberOfCards]}>This deck has {cardsText}</Text>
      </View>

      <View>
        <AppButton
          text='Start quiz'
          onPress={() => navigation.push('Quiz', { deckName: deck.name })}
          disabled={!anyQuestiobns} />
        {
          !anyQuestiobns && <Text style={[styles.centerText, styles.addCardsFirst]}>To start a quiz, add some cards first</Text>
        }
      </View>


      <TouchableWithoutFeedback onPress={() => setIsDeleteModelVisible(true)}>
        <Text style={[styles.centerText, styles.deleteDeck]}>Delete deck</Text>
      </TouchableWithoutFeedback>

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

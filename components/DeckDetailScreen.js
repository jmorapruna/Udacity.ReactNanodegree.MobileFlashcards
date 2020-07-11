import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AppButton from '../components/AppButton'
import ConfirmDeleteDeckModal from '../components/ConfirmDeleteDeckModal'

const styles = StyleSheet.create({
  deckName: {
    textAlign: 'center',
  },
  numberOfCards: {
    textAlign: 'center',
  },
  addCardsFirst: {
    textAlign: 'center',
  },
})

function DeckDetailScreen({ deck, navigation }) {

  const [isDeleteModelVisible, setIsDeleteModelVisible] = useState(false)
  const numberOfQuestions = deck.questions.length
  const anyQuestiobns = numberOfQuestions > 0

  useLayoutEffect(() => {
    navigation.setOptions({
      title: deck.name
    })
  }, [navigation, deck])

  return (
    <View>
      <ConfirmDeleteDeckModal
        isVisible={isDeleteModelVisible}
        setIsVisible={setIsDeleteModelVisible} />

      <Text style={styles.deckName}>{deck.name}</Text>

      {
        anyQuestiobns
          ? <Text style={styles.numberOfCards}>{numberOfQuestions} cards</Text>
          : <Text style={styles.numberOfCards}>No cards</Text>
      }

      <AppButton
        text='Start quiz'
        onPress={() => { }}
        disabled={!anyQuestiobns} />

      {
        !anyQuestiobns && <Text style={styles.addCardsFirst}>To start a quiz, add some cards first</Text>
      }

      <TouchableWithoutFeedback onPress={() => setIsDeleteModelVisible(true)}>
        <Text>Delete card</Text>
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

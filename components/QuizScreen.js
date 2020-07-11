import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

function QuizScreen({ deck, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: deck.name
    })
  }, [navigation, deck])

  return (
    <View>
      <Text>{JSON.stringify(deck)}</Text>
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

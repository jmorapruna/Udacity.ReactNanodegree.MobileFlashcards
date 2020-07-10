import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

function DeckDetailScreen({ deck, navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: deck.name
    })
  }, [navigation, deck])

  return (
    <View>
      <Text>Detail of {deck.name}</Text>
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

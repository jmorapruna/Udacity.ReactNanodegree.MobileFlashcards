import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import Deck from '../components/Deck'

function DecksScreen({ decks }) {
  return (
    <View>
      <FlatList
        data={decks}
        renderItem={({ item }) => <Deck name={item.name} numberOfCards={item.questions.length} />}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DecksScreen)

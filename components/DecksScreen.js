import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import Deck from '../components/Deck'
import { TouchableOpacity } from 'react-native-gesture-handler'

function DecksScreen({ decksArray, navigation }) {
  return (
    <View>
      <FlatList
        data={decksArray}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={.85}
            onPress={() => navigation.navigate('DeckDetail', { deckName: item.name })}>
              <Deck name={item.name} numberOfCards={item.questions.length} />
          </TouchableOpacity>)}
      />
    </View>
  )
}

function mapStateToProps({ decks }, { navigation }) {
  const decksArray = Object.values(decks)

  return {
    decksArray,
    navigation,
  }
}

export default connect(mapStateToProps)(DecksScreen)

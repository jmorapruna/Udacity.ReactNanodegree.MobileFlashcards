import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text, Image, StyleSheet } from 'react-native'
import Deck from '../components/Deck'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  studentIcon: {
    width: 128,
    height: 128,
    alignSelf: 'center',
    marginBottom: 15,
  },
  decksList: {
    paddingBottom: 20,
  },
  emtpyContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    maxHeight: 600,
  },
  instructionsText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
    maxWidth: 240,
  },
})

function DecksScreen({ decksArray, navigation }) {
  if (decksArray.length === 0)
    return (
      <View style={styles.emtpyContent}>
        <View>
          <Image style={styles.studentIcon} source={require('../images/student.png')} />
          <Text style={styles.instructionsText}>The Mobile Flashcards app helps you study for exam evaluations</Text>
        </View>
        <Text style={styles.instructionsText}>You can add and group related questions into decks, and take quizzes to practice</Text>
        <Text style={styles.instructionsText}>To add a new deck, use the plus button</Text>
      </View>
    )

  return (
    <View>
      <FlatList
        style={styles.decksList}
        data={decksArray}
        keyExtractor={item => item.name}
        contentContainerStyle={{ paddingBottom: 8 }}
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

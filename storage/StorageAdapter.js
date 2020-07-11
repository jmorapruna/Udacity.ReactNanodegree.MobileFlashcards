import AsyncStorage from '@react-native-community/async-storage'

const DECKS_KEY = 'DECKS'

export const getAllDecks = async () => {
  let decks = {}

  try {
    decksString = await AsyncStorage.getItem(DECKS_KEY)
    decks = JSON.parse(decksString)
  } catch (e) {
    console.error('StorageAdapter - getAllDecks', e)
  }

  return decks
}

export const addEmptyDeck = async (deckName) => {
  try {
    const decks = await getAllDecks()

    const newDecks = {
      ...decks,
      [deckName]: {
        name: deckName,
        questions: []
      }
    }
    
    const value = JSON.stringify(newDecks)
    await AsyncStorage.setItem(DECKS_KEY, value)
  } catch (e) {
    console.error('StorageAdapter - addEmptyDeck', e)
  }
}

export const addCardToDeck = async (deckName, question, answer) => {
  try {
    const decks = await getAllDecks()

    const newQuestion = {
      question,
      answer
    }

    const newDecks = {
      ...decks,
      [deckName]: {
        ...decks[deckName],
        questions: [
          ...decks[deckName].questions,
          newQuestion
        ]
      }
    }

    const value = JSON.stringify(newDecks)
    await AsyncStorage.setItem(DECKS_KEY, value)
  } catch (e) {
    console.error('StorageAdapter - addCardToDeck', e)
  }
}

export const deleteDeck = async (deckName) => {
  try {
    const decks = await getAllDecks()

    const {
      [deckName]: deleteDeck,
      ...newDecks
    } = decks

    const value = JSON.stringify(newDecks)
    await AsyncStorage.setItem(DECKS_KEY, value)
  } catch (e) {
    console.error('StorageAdapter - deleteDeck', e)
  }
}

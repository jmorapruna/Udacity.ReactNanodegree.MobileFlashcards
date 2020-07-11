export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS'
export const LOAD_ALL_DECKS_SUCCESS = 'LOAD_ALL_DECKS_SUCCESS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export function loadAllDecks() {
  return {
    type: LOAD_ALL_DECKS,
  }
}

export function loadAllDecksSuccess(decks) {
  return {
    type: LOAD_ALL_DECKS_SUCCESS,
    decks
  }
}

export function addDeck(deckName) {
  return {
    type: ADD_DECK,
    deckName,
  }
}

export function addCardToDeck(deckName, question, answer) {
  return {
    type: ADD_CARD_TO_DECK,
    deckName,
    question,
    answer
  }
}

export function deleteDeck(deckName) {
  return {
    type: DELETE_DECK,
    deckName
  }
}

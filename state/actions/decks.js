export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const DELETE_DECK = 'DELETE_DECK'

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

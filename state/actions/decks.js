export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const DELETE_DECK = 'DELETE_DECK'

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

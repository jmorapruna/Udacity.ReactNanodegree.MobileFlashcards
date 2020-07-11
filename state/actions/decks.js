export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function addCardToDeck(deckName, question, answer) {
  return {
    type: ADD_CARD_TO_DECK,
    deckName,
    question,
    answer
  }
}

import { ADD_CARD_TO_DECK, DELETE_DECK } from '../actions/decks'

export default function decks(state = {
  'React': { name: 'React', questions: [{ question: 'q1', answer: 'a1' }, { question: 'q2', answer: 'a2' }] },
  'Javascript': { name: 'Javascript', questions: [{ question: 'q3', answer: 'a3' }] },
  'Udacity': { name: 'Udacity', questions: [] },
}, action) {

  switch (action.type) {
    case ADD_CARD_TO_DECK: {
      const { deckName, question, answer } = action

      return {
        ...state,
        [deckName]: {
          ...state[deckName],
          questions: [
            ...state[deckName].questions,
            { question, answer }
          ]
        }
      }
    }

    case DELETE_DECK: {
      const { deckName } = action

      const {
        [deckName]: deletedDeck,
        ...stateWithoutDeck
      } = state

      return stateWithoutDeck
    }

    default:
      return state
  }
}

import {
  LOAD_ALL_DECKS_SUCCESS,
  ADD_DECK,
  ADD_CARD_TO_DECK,
  DELETE_DECK
} from '../actions/decks'

export default function decks(state = {}, action) {

  switch (action.type) {
    case LOAD_ALL_DECKS_SUCCESS: {
      const { decks } = action

      return {
        ...decks
      }
    }

    case ADD_DECK: {
      const { deckName } = action

      return {
        ...state,
        [deckName]: {
          name: deckName,
          questions: []
        }
      }
    }

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

import {
  LOAD_ALL_DECKS, LOAD_ALL_DECKS_SUCCESS,
} from '../actions/decks'

export const NOT_LOADING_YET = 'NOT_LOADING_YET'
export const LOADING = 'LOADING'
export const LOADED = 'LOADED'

export default function decks(state = NOT_LOADING_YET, action) {

  switch (action.type) {
    case LOAD_ALL_DECKS:
      return LOADING

    case LOAD_ALL_DECKS_SUCCESS:
      return LOADED

    default:
      return state
  }
}

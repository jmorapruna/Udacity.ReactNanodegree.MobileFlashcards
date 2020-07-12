import { combineReducers } from 'redux'
import loading from './loading'
import decks from './decks'

export default combineReducers({
  decks,
  loading,
})

import { combineEpics } from 'redux-observable'
import decksEpics from './decksEpics'

export default combineEpics(
  ...decksEpics
)

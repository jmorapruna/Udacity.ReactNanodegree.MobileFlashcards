import {
  LOAD_ALL_DECKS, loadAllDecksSuccess,
  ADD_DECK,
  ADD_CARD_TO_DECK,
  DELETE_DECK
} from '../actions/decks'
import { ofType } from 'redux-observable'
import { exhaustMap, map, ignoreElements } from 'rxjs/operators'

import * as StorageAdapter from '../../storage/StorageAdapter'

const loadAllDecks = (action$) =>
  action$.pipe(
    ofType(LOAD_ALL_DECKS),
    exhaustMap(() => StorageAdapter.getAllDecks()),
    map(decks => loadAllDecksSuccess(decks))
  )

const addDeckEpic = (action$) =>
  action$.pipe(
    ofType(ADD_DECK),
    exhaustMap(({ deckName }) => StorageAdapter.addEmptyDeck(deckName)),
    ignoreElements()
  )

const addCardToDeckEpic = (action$) =>
  action$.pipe(
    ofType(ADD_CARD_TO_DECK),
    exhaustMap(
      ({ deckName, question, answer }) => StorageAdapter.addCardToDeck(deckName, question, answer)
    ),
    ignoreElements()
  )

const deleteDeckEpic = (action$) =>
  action$.pipe(
    ofType(DELETE_DECK),
    exhaustMap(
      ({ deckName }) => StorageAdapter.deleteDeck(deckName)
    ),
    ignoreElements()
  )

export default [
  loadAllDecks,
  addDeckEpic,
  addCardToDeckEpic,
  deleteDeckEpic,
]
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteDeck } from '../state/actions/decks'
import AppButton from './AppButton'

import {
  Modal,
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingTop: 35,
    paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centerText: {
    textAlign: 'center'
  },
  title: {
    fontSize: 26,
    marginBottom: 15
  },
  subTitle: {
    fontSize: 18,
  },
  deckName: {
    marginTop: 20,
    marginBottom: 15,
  }
})

function ConfirmDeleteDeckModal({ deckName, isVisible, setIsVisible, popScreen }) {
  const dispatch = useDispatch()

  const handleConfirmDeletePressed = useCallback(() => {
    setIsVisible(false)
    popScreen()
    dispatch(deleteDeck(deckName))
  }, [isVisible, setIsVisible])

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.centerText, styles.title]}>Are you sure?</Text>
          <Text style={[styles.centerText, styles.subTitle]}>The following card will be deleted:</Text>
          <Text style={[styles.centerText, styles.deckName]}>{deckName}</Text>

          <AppButton
            onPress={handleConfirmDeletePressed}
            text='Delete'
            colorCode='danger' />

          <AppButton
            onPress={() => setIsVisible(false)}
            text='Cancel' />

        </View>
      </View>
    </Modal>
  )
}

export default ConfirmDeleteDeckModal

import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteDeck } from '../state/actions/decks'

import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
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
          <Text style={styles.modalText}>Delete {deckName}?</Text>

          <Text style={styles.modalText}>This action cannot be undone</Text>

          <TouchableHighlight
            style={{ ...styles.openButton }}
            onPress={() => setIsVisible(false)}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
            onPress={handleConfirmDeletePressed}>
            <Text style={styles.textStyle}>Delete</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmDeleteDeckModal

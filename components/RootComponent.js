import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { TouchableOpacity, Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { withPreventDoubleClick } from './withPreventDoubleClick'
import DecksScreen from './DecksScreen'
import AddDeckScreen from './AddDeckScreen'
import DeckDetailScreen from './DeckDetailScreen'
import AddCardToDeckScreen from './AddCardToDeckScreen'
import QuizScreen from './QuizScreen'
import { loadAllDecks } from '../state/actions/decks'
import { setLocalNotificationAsync } from '../notifications/NotificationsService'
import { LOADED } from '../state/reducers/loading'

function AddButton({ onPress, ...props }) {
  const addIconName = Platform.OS === 'ios'
    ? 'ios-add'
    : 'md-add'

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onPress}>
      <Ionicons name={addIconName} size={28} color='black' style={{ marginRight: 24 }} {...props} />
    </TouchableOpacity>
  )
}

const AddButtonWithDoubleClickFix = withPreventDoubleClick(AddButton)
const Stack = createStackNavigator()

const RootComponent = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(loadAllDecks())
    setLocalNotificationAsync().then()
  }, [])

  if (loading !== LOADED)
    return <></>

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Decks'
          component={DecksScreen}
          options={({ navigation }) => ({
            title: 'Mobile Flashcards',
            headerRight: () => (
              <AddButtonWithDoubleClickFix
                onPress={() => navigation.push('AddDeck')} />
            )
          })}
        />

        <Stack.Screen
          name='AddDeck'
          component={AddDeckScreen}
          options={{
            title: 'Add a deck'
          }}
        />

        <Stack.Screen
          name='AddCardToDeck'
          component={AddCardToDeckScreen}
        />

        <Stack.Screen
          name='DeckDetail'
          component={DeckDetailScreen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <AddButtonWithDoubleClickFix
                onPress={() => navigation.push('AddCardToDeck', {
                  deckName: route.params.deckName
                })}
              />
            )
          })}
        />

        <Stack.Screen
          name='Quiz'
          component={QuizScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default connect()(RootComponent)

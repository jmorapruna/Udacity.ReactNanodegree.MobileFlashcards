import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './state/reducers'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { withPreventDoubleClick } from './components/withPreventDoubleClick'
import DecksScreen from './components/DecksScreen'
import AddDeckScreen from './components/AddDeckScreen'
import DeckDetailScreen from './components/DeckDetailScreen'
import AddCardToDeckScreen from './components/AddCardToDeckScreen'
import QuizScreen from './components/QuizScreen'

const Stack = createStackNavigator()

function AddButton({ onPress, ...props }) {
  const addIconName = Platform.OS === 'ios'
    ? 'ios-add'
    : 'md-add'

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onPress}>
      <Ionicons name={addIconName} size={24} color='black' style={{ marginRight: 24 }} {...props} />
    </TouchableOpacity>
  )
}

const AddButtonWithDoubleClickFix = withPreventDoubleClick(AddButton)

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Decks'
          component={DecksScreen}
          options={({ navigation }) => ({
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
  );
}

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <MainNavigator />
    </Provider>
  )
}

export default App

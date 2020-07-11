import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './state/reducers'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import DecksScreen from './components/DecksScreen'
import AddDeckScreen from './components/AddDeckScreen'
import DeckDetailScreen from './components/DeckDetailScreen'
import AddCardToDeckScreen from './components/AddCardToDeckScreen'

const Stack = createStackNavigator()

function ToolbarAddButton(props) {
  const addIconName = Platform.OS === 'ios'
    ? 'ios-add'
    : 'md-add'

  return (
    <TouchableOpacity>
      <Ionicons name={addIconName} size={24} color='black' style={{ marginRight: 24 }} {...props} />
    </TouchableOpacity>
  )
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Decks'
          component={DecksScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <ToolbarAddButton
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
              <ToolbarAddButton
                onPress={() => navigation.push('AddCardToDeck', {
                  deckName: route.params.deckName
                })} />
            )
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <MainNavigator />
    </Provider>
  )
}

export default App

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './state/reducers'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DeckScreen from './components/DecksScreen'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Decks' component={DeckScreen} />
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

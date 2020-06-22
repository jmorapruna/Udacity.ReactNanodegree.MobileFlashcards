import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './state/reducers'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DecksScreen from './components/DecksScreen'
import { Ionicons } from '@expo/vector-icons'
import DeckDetailScreen from './components/DeckDetailScreen'

const Stack = createStackNavigator()

function MainNavigator() {
  const addIconNma = Platform.OS === 'ios'
    ? 'ios-add'
    : 'md-add'

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Decks'
          component={DecksScreen}
          options={() => ({
            headerRight: props => (
              <TouchableOpacity>
                <Ionicons name={addIconNma} size={24} color='black' style={{ marginRight: 24 }} {...props} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name='DeckDetail'
          component={DeckDetailScreen}
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

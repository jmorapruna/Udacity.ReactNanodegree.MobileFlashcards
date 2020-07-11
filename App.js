import React from 'react'
import configureStore from './state/configureStore'
import { Provider } from 'react-redux'
import RootComponent from './components/RootComponent'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  )
}

export default App

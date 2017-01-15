import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { install } from 'redux-loop'
import reducers from './reducers'
import App from './components/app'

const initialState = {}
let store = createStore(reducers, initialState, install())

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

Meteor.startup(() => {
  render(<Root />, document.getElementById('root'))
})

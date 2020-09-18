import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// what does a reducer return?
import reducer from './reducers'

// This is merely a thunk.
import middleware from './middleware'

const store = createStore(reducer, middleware)

// So I got it all set up. How do I start it?
// I need to call in the users from the fake API so 
// I can then display them in the login page.
ReactDOM.render(
  // It appears that putting the store on store adds dispatch method to the props property
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
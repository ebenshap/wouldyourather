import { combineReducers } from 'redux'

// import all the reducers
import users from './users'
import authedUser from './authedUser'
import questions from './questions'

import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  users,
  loadingBar: loadingBarReducer,
  authedUser,
  questions
})
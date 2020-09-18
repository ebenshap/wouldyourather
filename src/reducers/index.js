// Redux has a special tool for combining multiple reducers.
// But then how do you let it know which reducer to use?
// does it just run them all and leave it up to the 
// reducers to decide if they should run?
import { combineReducers } from 'redux'

// import all the reducers
import users from './users'

import authedUser from './authedUser'
import questions from './questions'

// import tweets from './tweets'
 import { loadingBarReducer } from 'react-redux-loading'

// But what is the format of the reducer. That would be good boiler plate. 
export default combineReducers({
  users,
  loadingBar: loadingBarReducer,
  authedUser,
  questions
})
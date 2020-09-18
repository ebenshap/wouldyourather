import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      // Not sure I get this syntax.
      // Is it expanding the data object passed 
      // from the promise.
      // Yes, it works just like when importing a named module.
      // It would be good to be clearer in this syntax.
      .then(data => {
        dispatch(receiveUsers(data.users))
        dispatch(receiveQuestions(data.questions))
        dispatch(hideLoading())
      })
  }
} 
import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(data => {
        dispatch(receiveUsers(data.users))
        dispatch(receiveQuestions(data.questions))
        dispatch(hideLoading())
      })
  }
} 
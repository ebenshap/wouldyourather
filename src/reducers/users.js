import { SUBMIT_VOTE, SAVE_QUESTION } from '../actionMessages/questions'
import { RECEIVE_USERS } from '../actionMessages/users'

export default function users (state = {}, action) {
  switch(action.type) {

    case RECEIVE_USERS :
      return {
        ...state,
        // You can pass in more users through the action
        ...action.users
      }

    case SAVE_QUESTION :
      console.log(action)
      return {
        ...state,
        [action.data.author]: {
          ...state[action.data.author],
          questions: state[action.data.author].questions.concat([action.data.id])
        }
      }

    case SUBMIT_VOTE :

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.question]: action.vote
          }
        }
      }
    
    default :
      return state
  }
} 
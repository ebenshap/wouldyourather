import { RECEIVE_QUESTIONS, SUBMIT_VOTE, SAVE_QUESTION } from '../actionMessages/questions'

// State can be any type; string, array object, etc. It's totally up to you.
export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        // You can pass in more questions through the action
        ...action.questions
      }
    case SAVE_QUESTION :
        return {
          ...state,
          // You can pass in more questions through the action
          [action.data.id]: action.data
        }
    case SUBMIT_VOTE :
      return {
        ...state,
        // This is the question to add the vote to.
        [action.question]: {
          // print out all of it's properties
          ...state[action.question ],
          // and then within it's vote object...
          [action.vote] : {
            // print out the vote properties
            ...state[action.question ][action.vote],
            // and finally overwrite the votes.
            // these needs to be improved.
            votes: [ ...state[action.question ][action.vote].votes, action.authedUser ]
          }
        }
      }
    default :
      return state
  }
} 
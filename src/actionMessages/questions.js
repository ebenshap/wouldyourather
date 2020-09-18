import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_VOTE = 'SUBMIT_VOTE'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleSaveQuestion ({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    
    return _saveQuestion({ optionOneText, optionTwoText, author })
      .then(data => {
        dispatch(saveQuestion (data) )    
    })
  }
}

export function saveQuestion (data) {
  return {
    type: SAVE_QUESTION,
    data
  }
}

export function handleSubmitVote (authedUser, qid, answer) {
  
  return (dispatch) => {
    dispatch(submitVote (authedUser, qid, answer))
    return _saveQuestionAnswer({authedUser, qid, answer})
      // Not sure I get this syntax.
      // Is it expanding the data object passed 
      // from the promise.
      // Yes, it works just like when importing a named module.
      // It would be good to be clearer in this syntax.
      .then(data => {
        
      })
  }
  
}

export function submitVote (authedUser, question, vote) {
  return {
    type: SUBMIT_VOTE,
    vote,
    question,
    authedUser
  }
}
// It's possible for actions to go to multiple reducers.
// So the question-related actions that update the user object
// don't need to create their own actions to have their reducer
// run when the question-related actions run.

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

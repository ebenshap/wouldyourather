import { AUTH_USER, LOGOUT_USER } from '../actionMessages/authedUser'

// What are these values that are passed down to the reducer?
// Reducers are pure functions that recieve a copy of the current state
// and returns the new altered state.
// It can also recieve the currnt state unaltered incase 
// any template components need it.
export default function authedUser (state = "", action) {
  
  switch(action.type) {
    case AUTH_USER :
      return action.user;

    case LOGOUT_USER:
      return "";

    default :
    // This would get called any time there's an action dispatched that
    // that doesn't apply to this reducer.
    //console.log(action.type)
      return state
  }
} 
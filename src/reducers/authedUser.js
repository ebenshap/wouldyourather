import { AUTH_USER, LOGOUT_USER } from '../actionMessages/authedUser'

export default function authedUser (state = "", action) {
  
  switch(action.type) {
    case AUTH_USER :
      return action.user;

    case LOGOUT_USER:
      return "";

    default :
      return state
  }
} 
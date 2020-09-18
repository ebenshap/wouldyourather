export const AUTH_USER = 'AUTH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'


export function authUser (user) {
  return {
    type: AUTH_USER,
    user
  }
}

export function logOutUser (user) {
  return {
    type: LOGOUT_USER,
    user
  }
}
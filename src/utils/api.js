// Use brackets when the name of the exported item isn't "default"
// and the name used in the export is mapped to a variable of the same name
// in the importing file.
import {
  _getUsers, _getQuestions
 } from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(), _getQuestions()
  ]).then(([users, questions]) => ({
    users, questions
  }))
}

import React from 'react'
import { NavLink } from 'react-router-dom'


export default function QuestionCardNav (props) {
  var question = props.question
  return <div className="col col-2">      
    <p>Would you rather:</p>
    <p><b>{question.optionOne.text}</b> or <b>{question.optionTwo.text}</b>?</p>
    <NavLink to={'/question/'+question.id} activeClassName='active'>
      View Poll
    </NavLink> 
  </div>
}
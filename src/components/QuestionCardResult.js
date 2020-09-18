import React from 'react'
import { NavLink } from 'react-router-dom'

export default function QuestionCardResult (props) {
  var question = props.question
  var optionOneVotes = question.optionOne.votes.length;
  var optionTwoVotes = question.optionTwo.votes.length
  var total = optionOneVotes + optionTwoVotes;
  var didVoteOne = 0;
  var didVoteTwo = 0;
  if ( props.authedUser ) {
    didVoteOne = question.optionOne.votes.filter(item => item === props.authedUser).length
    didVoteTwo = question.optionTwo.votes.filter(item => item === props.authedUser).length
  }
  
  return <div className="col col-2">      
  <p>Would you rather:</p>
  <p><b>{question.optionOne.text}?</b> 
  <br/>{ optionOneVotes } votes, { optionOneVotes/(total/100) || 0 }%
  { didVoteOne? <span><br/>You voted for this.</span>: "" }</p>

  <p>or</p>
  
  <p><b>{question.optionTwo.text}?</b> 
  <br/>{ optionTwoVotes } votes, { optionTwoVotes/(total/100) || 0 }%
  { didVoteTwo? <span><br/>You voted for this.</span>: "" }</p>
</div>
}


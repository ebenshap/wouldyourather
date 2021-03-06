import React from 'react'

import QuestionCardNav from './QuestionCardNav'
import QuestionCardPoll from "./QuestionCardPoll"
import QuestionCardResult from "./QuestionCardResult"

function QuestionCardWrapper (props) {
  let users = props.users;
  let question = props.question;
  let cardType = "navigation"
  if(props.cardType) {
    cardType = props.cardType
  }

  return ( 
    <div className="card" >
      <div className="col col-1">
        <p>{users[ question.author ].name } asks</p>
        <p><img src={users[ question.author ].avatarURL } /></p>
      </div>

      {cardType === "navigation"? <QuestionCardNav question={question} /> : 
      cardType === "poll"? <QuestionCardPoll question={question} /> : 
      cardType === "pollResult"? <QuestionCardResult authedUser={props.authedUser} question={question} /> : ""}
    </div>
  ) 

}

export default QuestionCardWrapper;
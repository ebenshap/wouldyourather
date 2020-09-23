import React from 'react'
import { connect } from 'react-redux'
import QuestionCard from "./QuestionCardWrapper"
import { Link, Redirect } from 'react-router-dom'

function PollPage (props) {

  if(!props.authedUser) {
    return <Redirect
        to={{
          pathname: "/login",
          state: { id: props.id }
        }}
      />
  }

  let question = props.question;

  let cardType="poll";
  
  if(question){
    if(props.authedUser){
      let didAnswer = [...question.optionOne.votes, 
        ...question.optionTwo.votes].filter(item => item === props.authedUser ).length ;
      if(didAnswer) {
        cardType="pollResult";
      }
    } else {
      cardType="pollResult";
    }
    return <React.Fragment> 
      { cardType === "pollResult" ? <h2>Poll Result</h2> : <h2>Vote</h2> }
      <QuestionCard 
        authedUser={props.authedUser} 
        cardType={cardType} 
        users ={props.users} 
        question={question} 
        key={props.id} />
          { !props.authedUser  ? <div id="fixedLogin" ><Link to="/">Login</Link></div> : ""}
    </React.Fragment>
  }
  return <React.Fragment>
    <h2>404 Not Found</h2>
  </React.Fragment>
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  return {
    id,
    users, 
    authedUser,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(PollPage)
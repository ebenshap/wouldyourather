import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../actionMessages/authedUser'
import QuestionCard from "./QuestionCardWrapper"
import { Link } from 'react-router-dom'

class PollPage extends Component {
  
  render() {
    var cardType="poll";
    if(this.props.authedUser){
      var didAnswer = [...this.props.question.optionOne.votes, 
        ...this.props.question.optionTwo.votes].filter(item => item === this.props.authedUser ).length ;
      if(didAnswer) {
        cardType="pollResult";
      }
    } else {
      cardType="pollResult";
    }
    
    if(this.props.question){
      return <React.Fragment> 
        { cardType === "pollResult" ? <h2>Poll Result</h2> : <h2>Vote</h2> }
        <QuestionCard dispatch={this.props.dispatch} 
          authedUser={this.props.authedUser} 
          cardType={cardType} 
          users ={this.props.users} 
          question={this.props.question} 
          key={this.props.id} />
           { !this.props.authedUser  ? <div id="fixedLogin" ><Link to="/">Login</Link></div> : ""}
      </React.Fragment>
    }
    return <React.Fragment>
      <h2>404 Not Found</h2>
      { !this.props.authedUser  ? <div id="fixedLogin" ><Link to="/">Login</Link></div> : ""}
    </React.Fragment>
  }
}
// Interesting that object expansion works in function prototype too
// before an actual object has even been defined.
function mapStateToProps ({ authedUser, questions, users, dispatch }, props) {
  const { id } = props.match.params;
  return {
    id,
    users, 
    authedUser,
    question: questions[id], 
    dispatch
  }
}

export default connect(mapStateToProps)(PollPage)
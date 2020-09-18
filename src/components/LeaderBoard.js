import React, { Component } from 'react'
import {connect} from 'react-redux'
import questions from '../reducers/questions';
import LeaderBoardCard from './LeaderBoardCard'
import { Redirect } from 'react-router-dom'

class LeaderBoard extends React.Component {

  render() {
    
    if(!this.props.authedUser) {
      return <Redirect to="/" />
    }

    return <React.Fragment><h2>Leader Board</h2>
    { this.props.usersArray.map( user => 
        <LeaderBoardCard key={user.id} user={user}  />
      )} 
    </React.Fragment>
  }
    
}

// And what is the logic of the parameters?
// there's a naming convention here, right?
// This is a good place to sort data
function mapStateToProps ({ users, authedUser }) {
  
  

  var usersArray = []
  Object.keys(users).map(item => {
    users[item].questionsNum = users[item].questions.length;
    users[item].answersNum = Object.keys(users[item].answers).length;
    users[item].total = users[item].questionsNum + users[item].answersNum;
    usersArray.push(users[item]) ;
  })

  usersArray.sort((a,b,) => {
    // if the result is negative then it's false
    // if the result is positive then it's true
    return b.total - a.total;
  });

  return {
    usersArray,
    authedUser
  }
}

export default connect (mapStateToProps)(LeaderBoard);
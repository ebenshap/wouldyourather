import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import LeaderBoardCard from './LeaderBoardCard'

class LeaderBoard extends Component {

  render() {

    if( !this.props.authedUser ) {
      return <Redirect
        to={{
          pathname: `${process.env.PUBLIC_URL}/login`,
          state: { redirectPath: `${process.env.PUBLIC_URL}/leaderboard` }
        }}
      />
    }
    
    return <React.Fragment><h2>Leader Board</h2>
    { this.props.usersArray.map( user => 
        <LeaderBoardCard key={user.id} user={user}  />
      )} 
    </React.Fragment>
  }
    
}

function mapStateToProps ({ users, authedUser }) {
  
  // Convert users object to array and add question/answer stat data.
  let usersArray = Object.values(users).map(user => {
    user.questionsNum = user.questions.length;
    user.answersNum = Object.keys(user.answers).length;
    user.total = user.questionsNum + user.answersNum;
    return user ;
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
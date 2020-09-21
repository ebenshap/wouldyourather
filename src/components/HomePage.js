import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../actionMessages/authedUser'
import Login from "./Login"
import QuestionList from "./QuestionList"

class HomePage extends Component {
    
  render() {
    
    return (
      !this.props.authedUser? <Login/> : <QuestionList/>  
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {users, authedUser};
}

export default connect(mapStateToProps)(HomePage)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionList from "./QuestionList"

class HomePage extends Component {
    
  render() {
    
    return (
      !this.props.authedUser? <Redirect to="/login" /> : <QuestionList/>  
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {users, authedUser};
}

export default connect(mapStateToProps)(HomePage)
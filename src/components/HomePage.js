import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../actionMessages/authedUser'
import Login from "./Login"
import QuestionList from "./QuestionList"

class HomePage extends Component {
  
  callThis = (e) => {
    // What exactly is this part? 
    // It's dispatching our own action... I've never done this before.
    // And the action is not written.
    // Also, I forgot how the action message creator is a separate step from
    // when the action message is dispatched, but it's simply a function
    // within a function.
    this.props.dispatch(authUser(this.selectVal.value))
  }
  
  render() {
    
    //console.log(this.props.users.array.forEach(element => {
    //});)
    var userArray = [];
    for(var item in this.props.users) {
      userArray.push( this.props.users[item]);
    }

    return (
      !this.props.authedUser? <Login/> : <QuestionList/>  
    )
  }
}
// Interesting that object expansion works in function prototype too
// before an actual object has even been defined.
function mapStateToProps ({ users, authedUser }) {
  return {users, authedUser};
}

export default connect(mapStateToProps)(HomePage)
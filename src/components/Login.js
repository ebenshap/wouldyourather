import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../actionMessages/authedUser'

class Login extends Component {
  
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
      <div id="LoginCard">
        <h2>Select a user to log in as:</h2>
        <div>
        <select ref={(input) => this.selectVal = input}  >
          <option value="" >Select a User</option>
          { userArray.map(item => ( <option key={item.id} value={item.id} >{item.name}</option> ) ) }
        
        </select>
        <button onClick={this.callThis}>Login</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {users, authedUser};
}

export default connect(mapStateToProps)(Login)
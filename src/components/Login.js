import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../actionMessages/authedUser'

class Login extends Component {
  
  callThis = (e) => {
    this.props.dispatch(authUser(this.selectVal.value))
  }
  
  render() {
    
    let userArray = Object.values(this.props.users);

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
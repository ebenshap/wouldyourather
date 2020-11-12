import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authUser } from '../actionMessages/authedUser'

class Login extends Component {
  
  callThis = (e) => {
    this.props.authUser(this.selectVal.value);
  }
  
  render() {
    if(this.props.authedUser) {
      if(this.props.redirectPath) {
        let path = this.props.redirectPath
        return <Redirect to={path} />
      } else {
        return <Redirect to={`${process.env.PUBLIC_URL}/` } />
      }
    }

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

function mapStateToProps ({ users, authedUser }, props) {
  let redirectPath = ""
  if(props.location.state) {
    redirectPath = props.location.state.redirectPath;
  }
  return { authedUser, redirectPath, users };
}

export default connect(mapStateToProps, { authUser })(Login)
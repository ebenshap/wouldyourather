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
      if(this.props.questionId) {
        let path = `question/${this.props.questionId}`
        return <Redirect to={path} />
      } else {
        return <Redirect to="/" />
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
  let questionId = ""
  if(props.location.state) {
    questionId = props.location.state.id;
  }
  return { authedUser, questionId, users };
}

export default connect(mapStateToProps, { authUser })(Login)
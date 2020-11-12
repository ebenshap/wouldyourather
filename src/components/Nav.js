import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {logOutUser} from "../actionMessages/authedUser"

class Nav extends Component {

  logUserOut =  (e) => {
    this.props.logOutUser();    
  }

  render() {
    return <nav className='nav'>
      <ul>
        <li>
          <h3>Would you rather?</h3>
        </li>
        <li>
          <NavLink to={`${process.env.PUBLIC_URL}/`} exact activeClassName='active'>
            Home  
          </NavLink>
        </li>
        { this.props.authedUser ?
        <React.Fragment>
        <li>
          <NavLink to={`${process.env.PUBLIC_URL}/add`} activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to={`${process.env.PUBLIC_URL}/leaderboard`} activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        </React.Fragment> : "" }
        

        <li className="greeting">
        { this.props.authedUser ?
          <p className="imageInString">Hello { this.props.users[ this.props.authedUser ].name } 
          <img src={ this.props.users[ this.props.authedUser ].avatarURL } /> 
            <span>, <button onClick={this.logUserOut}>Logout</button></span></p> : 
          <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>
            Log in
          </NavLink> }
          
        </li>
      </ul>
    </nav>
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}

export default connect (mapStateToProps, { logOutUser } )(Nav);
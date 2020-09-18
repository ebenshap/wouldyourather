import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Nav from "./Nav"
import { handleInitialData } from '../actionMessages/shared'

import HomePage from './HomePage'
import PollPage from './PollPage'
import NewQuestionPage from './NewQuestionPage'
import LeaderBoard from './LeaderBoard'

class App extends Component {

  componentDidMount() {
    // dispatch is from the store but attached directly to props.
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
      <Fragment>
      <LoadingBar />


        <div className='container'>
          <Nav />
          { 
            // A series of ternary statements to redirect to the front page if not logged in.
            (this.props.loading === true ? "Loading..."
            : <div className="content-container">
                  <Route path='/' exact component={HomePage} />
                  <Route path='/question/:id' component={PollPage} />
                  <Route path='/add' component={NewQuestionPage} />   
                  <Route path='/leaderboard' component={LeaderBoard} />                 
              </div>)
          } 
        </div>
      </Fragment>
    </Router>
    )
  }
}

// And what is the logic of the parameters?
// there's a naming convention here, right?
function mapStateToProps ({ users, authedUser, questions }) {
  return {
    users,
    authedUser,
    questions,
    loading : (!Object.keys(users).length && !Object.keys(questions).length)
    // returns an object that maps state to props
    // would this ever occur automatically following a naming convention?
  }
}

// The connect() function connects a React component to a Redux store.
// https://react-redux.js.org/api/connect
export default connect(mapStateToProps)(App)
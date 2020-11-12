import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Nav from "./Nav"
import { handleInitialData } from '../actionMessages/shared'

import HomePage from './HomePage'
import PollPage from './PollPage'
import NewQuestionPage from './NewQuestionPage'
import LeaderBoard from './LeaderBoard'

import Login from "./Login"

class App extends Component {

  componentDidMount() {
    // dispatch is from the store but attached directly to props.
    // unless you use 'connect' to auto wrap the function in another
    // function that will call it and pass it's return data to dispatch.
    // That function is saved to props.
    this.props.handleInitialData();
  }

  render() {
    return (
      <Router>
      <Fragment>
      <LoadingBar />


        <div className='container'>
          <Nav />
          { 
            (this.props.loading === true ? "Loading..."
            : <div className="content-container">
                  <Route path={`${process.env.PUBLIC_URL}/`} exact component={HomePage} />
                  <Route path={`${process.env.PUBLIC_URL}/question/:id`} component={PollPage} />
                  <Route path={`${process.env.PUBLIC_URL}/add`} component={NewQuestionPage} />   
                  <Route path={`${process.env.PUBLIC_URL}/leaderboard`} component={LeaderBoard} />
                  <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />                 
              </div>)
          } 
        </div>
      </Fragment>
    </Router>
    )
  }
}


function mapStateToProps ({ users, authedUser, questions }) {
  return {
    users,
    authedUser,
    questions,
    loading : (!Object.keys(users).length && !Object.keys(questions).length)
  }
}

export default connect(mapStateToProps, {handleInitialData})(App)
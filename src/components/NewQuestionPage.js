import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from "../actionMessages/questions"
import {Redirect} from "react-router-dom"
 
class NewQuestionPage extends Component {
  
  // Set questionNum on state manually on construction. 
  // That way we can rely on redux to redirect to the front page if the
  // number of questions stored has incremented.

  constructor(props) {
    super(props)
    this.state= {
      questionsNum : this.props.questionsNum,
      sending: false
    }
  }

  buttonClick = (e) => {
    
    if(this.optionOne.value && this.optionTwo.value) {
      var toSend = {
        optionOneText: this.optionOne.value, 
        optionTwoText: this.optionTwo.value, 
        author: this.props.authedUser
      }

      this.setState((prevState) => ({
        ...prevState,
        sending: true
      }) )
      this.props.dispatch(handleSaveQuestion(toSend))
      
    }
    e.preventDefault();
  }

  render() {

    if(this.state.redirect || !this.props.authedUser || (this.state.questionsNum !== this.props.questionsNum) ) {
      return <Redirect to='/' />
    }
    return  <React.Fragment> 
      <h2>Create new question</h2>
      <form>
        <p>Would you rather...</p>
        <p>
          <label>Option One: </label>
          <input ref={(input) => { this.optionOne = input }} type="text" name="optionOne"/> ?
        </p>
        <p>Or</p>
        <p>
          <label>Option Two: </label>
          <input ref={(input) => { this.optionTwo = input }} type="text" name="optionTwo"/> ?
        </p>
        <button onClick={this.buttonClick} className="ta-c" >{!this.state.sending ? "Submit" : "Sending..."}</button>
      </form>    
    </React.Fragment>
  }
}

function mapStateToProps ({ authedUser, dispatch, questions}) {
  return {
    authedUser,
    dispatch,
    questionsNum: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(NewQuestionPage)
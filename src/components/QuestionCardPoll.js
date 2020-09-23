import React, { Component } from 'react'
import { handleSubmitVote } from '../actionMessages/questions'
import { connect } from 'react-redux'


class QuestionCardPoll extends Component {
  
  state ={
    option1: false,
    option2: false
  }

  optionChange = (e) => {
    this.setState({
      option1: e.target.value === "option1",
      option2: e.target.value === "option2"
    })
  }

  buttonClick = (e) => {
    let answer = "";
    if ( this.state.option1 ) answer = "optionOne";
    if ( this.state.option2 ) answer = "optionTwo";
    if (answer) {
      this.props.handleSubmitVote( this.props.authedUser, this.props.question.id, answer );
    } 
  }

  render() {
    let question = this.props.question
    return <div className="col col-2">      
    <p>Would you rather:</p>
    <p><input checked={this.state.option1} onChange={this.optionChange} value="option1" name="option" type="radio" />{question.optionOne.text}?</p>
    <p>or</p>
    <p><input checked={this.state.option2} onChange={this.optionChange} value="option2" name="option" type="radio" />{question.optionTwo.text}?</p>
    <button onClick={this.buttonClick}>
      Submit
    </button> 
  </div>

  }
}

function mapStateToProps ({ authedUser }, props) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps, { handleSubmitVote })(QuestionCardPoll)
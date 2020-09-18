import React, { Component } from 'react'
import { connect } from 'react-redux'
import authedUser from '../reducers/authedUser'
import { NavLink } from 'react-router-dom'
import QuestionCard from './QuestionCardWrapper'
import { RECEIVE_USERS } from '../actionMessages/users'

class QuestionList extends Component {
  
  state= {
    questionsToShow: "unanswered"
  }

  toggleActive = (e) => {
    var result = e.target.innerText.toLowerCase();
    this.setState((prevState) => {
        var returnValue ="answered"
        if(result === "answered") {
          returnValue ="answered";
        } else if(result === "unanswered") {
          returnValue ="unanswered";
        }
        return {
          questionsToShow : returnValue
        }
      }
    )
    
  }

  render() {
  
    return (
      <div id="QuestionList" className="content-container">
        <h2>Questions</h2>
        <p className="ta-c">
          <button onClick={this.toggleActive} className={this.state.questionsToShow === "unanswered" ? "active ml-1" : "ml-1" }>Unanswered</button> 
          &nbsp;<button onClick={this.toggleActive} className={this.state.questionsToShow === "answered" ? "active" : "" }>Answered</button> 
          
        </p>
        { this.props.questionsArray.map(question => {
          var show = 0;
          var didAnswer = [...question.optionOne.votes, ...question.optionTwo.votes];
          didAnswer = didAnswer.filter(item => item === this.props.authedUser);

          if ( ( this.state.questionsToShow === "answered" && didAnswer.length ) ||
          ( this.state.questionsToShow === "unanswered" && !didAnswer.length ) )  {
            return <QuestionCard users ={this.props.users} question={question} key={question.id} />
          }
        })
      }
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser, questions }) {
  
  var questionsArray = [];
  Object.keys(questions).map(item => {
    questionsArray.push(questions[item]);
  })

  questionsArray.sort((a, b) => b.timestamp - a.timestamp)
  
  return {users, authedUser, questionsArray};
}

export default connect(mapStateToProps)(QuestionList)
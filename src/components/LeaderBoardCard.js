import React from 'react'

export default function LeaderBoardCard(props) {
  
  return <div className="card card-leaderBoard" key={props.user.id} >
  <div className="col col-1">
    <p><img src={props.user.avatarURL } /></p>
  </div>
  <div className="col col-2">
    <h3>{props.user.name } asks</h3>
    <p>Answered Questions: { props.user.answersNum }</p>
    <p>Created Questions: { props.user.questionsNum }</p>
  </div>
  <div className="col col-3">
    <p>Score</p>
<div className="score">{ props.user.total }</div> 
  </div>
</div>

}
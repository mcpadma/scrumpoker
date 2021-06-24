import React from 'react'

function ResultComponent() {
  return (
    <div className="resultContent">
      <div className="container results-title">
        <span>Results</span>
        <span className="showDiv">
          <button className="btn createRoom">SHOW</button>
        </span>
      </div>
      <div className="container results-btn-div">
        <span className="">
        <button className="btn clearRoom">CLEAR ROOM</button>
        </span>
        <span className="deleteDiv">
          <button className="btn delEstimate">DELETE ESTIMATES</button>
        </span>
      </div>
    </div>
  )
}

export default ResultComponent

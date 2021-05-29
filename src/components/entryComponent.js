import React from 'react'

import '../App.css';

import Header from '../shared/Header';

function EntryComponent() {
  return (
    <div>
      <Header />
      <div className="container entryContainer">
        <div className="container-fluid">
          <div className="entryNotLoggedIn">
            <h1 className="roomTitle">Set up your planning poker in seconds, start estimating story points in scrum poker now</h1>
            <h2 className="subtitle">Create your planning room and invite others with a single click</h2>
            <button type="submit" className="btn btn-primary createRoom">CREATE INSTANT ROOM</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntryComponent

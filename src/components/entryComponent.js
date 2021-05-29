import React,{useContext} from 'react'
import '../App.css';
import { uuid } from 'uuidv4';
import Header from '../shared/Header';

import roomNoContext from '../contexts/roomNoContext';

export function EntryComponent() {
  const [roomNo, setRoomNo] = useContext(roomNoContext);
  
  const createRoomHandler = () => {
    let roomNo = uuid();
    setRoomNo(roomNo);
    console.log(roomNo);
    alert(roomNo);
    localStorage.setItem("room number", roomNo);
  }
  return (
    <div>
      <Header />
      <div className="container entryContainer">
        <div className="container-fluid">
          <div className="entryNotLoggedIn">
            <h1 className="roomTitle">Set up your planning poker in seconds, start estimating story points in scrum poker now</h1>
            <h2 className="subtitle">Create your planning room and invite others with a single click</h2>
            <button type="submit" className="btn btn-primary createRoom" onClick={createRoomHandler}>CREATE INSTANT ROOM</button>
          </div>
        </div>
      </div>
    </div>
  )
}

//export default EntryComponent;

export function EnterRoomComponent(props) {
  return (
    <div>
      <Header />
      <div className="container entryContainer">
        <div className="container-fluid">
          <div className="entryNotLoggedIn">
            <div className="formTitle">Enter Room</div>
            <div className="formSubTitle"> Provide your name or any pseudonym to enter the scrum poker room </div>
            <div className="formSubTitle"> {props.match.params.id}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

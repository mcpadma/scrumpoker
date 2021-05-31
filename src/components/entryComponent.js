import React, { useState,useContext } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';
import Header from '../shared/Header';

import { useHistory } from 'react-router-dom';

//import roomNoContext from '../contexts/roomNoContext';
import userListContext from '../contexts/userListContext';

export function EntryComponent() {
  //const [roomNo, setRoomNo] = useContext(roomNoContext);
  const [roomCreated, setRoomCreated] = useState("");
  const [userList, setUserList] = useContext(userListContext);

  
  
  const createRoomHandler = () => {
    let roomNo = uuid();
    //setRoomNo(roomNo);
    setRoomCreated(roomNo);
    console.log(roomNo);
    alert(roomNo);
    localStorage.setItem("room number", roomNo);
  }
  return (
    <div>
      <Header room={roomCreated}/>
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
  var userList1 = useContext(userListContext)[0]
  const [userList, setUserList] = useContext(userListContext);
  const [userName, setUserName] = useState("");

  const history = useHistory();

  const formStyle ={
    margin: 'auto',
    width:'50%'
  }
  const nameHandler =(e) =>{
    
    if(userList1.includes(e.target.value)){
      alert("invalid username")
    }
    else{
      setUserName(e.target.value);
      
    }
    
console.log(e.target.value);
  }
  const enterRoomHandler = () => {
    if(userList1.includes(userName)){
      alert("userName already exists");
    }
    else{
      setUserList([...userList, userName]);
      history.push(`/room/${props.match.params.id}/scrum/${userName}`);
    }
    
  }
  return (
    <div>
      <Header room={props.match.params.id}/>
      <div className="container entryContainer">
        <div className="container-fluid">
          <div className="entryNotLoggedIn">
            <div className="formTitle">Enter Room</div>
            <div className="formSubTitle"> Provide your name or any pseudonym to enter the scrum poker room </div>
            <div className="formSubTitle"> {props.match.params.id}</div>
            <div className="mb-3 mt-3" style={formStyle}>
              <input type="text" class="form-control" id="pseudonameId"  placeholder="Display Name *" required onChange={nameHandler}/>
              <button class="btn btn-primary mb-3 mt-3 createRoom widthBtn" type="button" onClick={enterRoomHandler}>ENTER ROOM</button>
              <button type="button" class="btn btn-outline-secondary widthBtn mb-3 mt-3">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

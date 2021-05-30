import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Routes from './routes/routes';
import roomNoContext from './contexts/roomNoContext';
import userListContext from './contexts/userListContext';

function App() {
  const [roomNo, setRoomNo] = useState("");
  const [userList, setUserList] = useState([]);
  return (
    // <roomNoContext.Provider value={[roomNo, setRoomNo]}>
      <userListContext.Provider value={[userList, setUserList]}>
      <div className="App">
        <header>
          <Routes />
        </header>
      </div>
      </userListContext.Provider>
    //</roomNoContext.Provider>
  );
}

export default App;

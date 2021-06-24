import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Routes from './routes/routes';
import roomNoContext from './contexts/roomNoContext';
import userListContext from './contexts/userListContext';


import ToastContext from './contexts/toastContext';
import DummyComponent from './components/dummyComponent';



function App() {
  const [roomNo, setRoomNo] = useState("");
  const [userList, setUserList] = useState([]);
  const [toast, setToast] = useState({
    message: '',
    color: '',
    open: false,
  });
  // useEffect(() => {
  //   if(localStorage.getItem('users')) {
  //     setUserList(localStorage.getItem('users'));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('users', userList);
  // }, [userList]);

  return (
    // <roomNoContext.Provider value={[roomNo, setRoomNo]}>
    // <userListContext.Provider value={[userList, setUserList]}>
    <ToastContext.Provider value={[toast, setToast]}>
      <div className="App">
        
        <header>
          <DummyComponent/>
          {/* <Routes /> */}
        </header>
      </div>
    </ToastContext.Provider>
    //</userListContext.Provider>
    //</roomNoContext.Provider>
  );
}

export default App;

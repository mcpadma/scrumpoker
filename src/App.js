import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Routes from './routes/routes';
import roomNoContext from './contexts/roomNoContext';

function App() {
  const [roomNo, setRoomNo] = useState("");
  return (
    <roomNoContext.Provider value={[roomNo, setRoomNo]}>
      <div className="App">
        <header>
          <Routes />
        </header>
      </div>
    </roomNoContext.Provider>
  );
}

export default App;

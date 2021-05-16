import logo from './logo.svg';
import './App.css';
import { BrowserRouter,NavLink,Route } from 'react-router-dom';

import Routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <header>
        <Routes />
      </header>
    </div>
  );
}

export default App;

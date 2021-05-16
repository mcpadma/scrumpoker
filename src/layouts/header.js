import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <ul className="ul-style">
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/complaints"
                exact
                activeClassName="Link-active-style"
              >
                Complaints
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/events"
                exact
                activeClassName="Link-active-style"
              >
                Events
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/suggestions"
                exact
                activeClassName="Link-active-style"
              >
                Suggestions
              </NavLink>
            </li>
          </ul>
          
        </header>
    )
}

export default Header;
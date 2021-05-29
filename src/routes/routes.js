import React from "react";
import { Switch, Route } from "react-router-dom";

//import AppRoutes from "./appRoutes";

//Layouts
// import LoginLayout from '../layouts/loginLayout';
// import MainLayout from '../layouts/mainLayout';

//Pages- components
import {EntryComponent,EnterRoomComponent} from '../components/entryComponent';

const Routes = () => (
  <main>
    <Switch>
      {/* <AppRoutes
        exact
        path="/"
        layout={LoginLayout}
        component={EntryComponent}
      /> */}
      <Route
      exact
      path="/"
      component={EntryComponent}
    />
    <Route exact path="/room/:id" component={EnterRoomComponent}/>
    </Switch>
  </main>
);

export default Routes;
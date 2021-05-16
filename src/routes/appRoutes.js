import React from 'react';
import { Route, Switch } from "react-router-dom"

 const AppRoutes = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

export default AppRoutes;
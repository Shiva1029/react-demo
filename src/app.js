import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import 'styles/base/main.sass'; // Global styles
import 'styles/base/common.sass'; // Global styles
import HomeContainer from './containers/HomeContainer/HomeContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import LayoutContainer from './containers/LayoutContainer/LayoutContainer';

export const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/login" component={LoginContainer} />
      <Route component={LoginContainer} />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/home" component={HomeContainer} />
        <Route component={HomeContainer} />
      </Switch>
    );
  }
  return (
    <div className="App">
      <LayoutContainer {...props}>
        {routes}
      </LayoutContainer>
    </div>);
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.jwt !== '',
});

export default withRouter(connect(mapStateToProps)(App));

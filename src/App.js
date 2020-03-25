import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import storePath from './store';
import login from './LogIn';
import dashboared from './dashboard';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={storePath}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={login} exact />
            <Route path="/dashboared" component={dashboared} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;

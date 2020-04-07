import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import storePath from './store';
import login from './LogIn';
import dashboared from './dashboard';
import laws from './laws';
import announcement from './announcement';
import editLaws from './edit-laws';
import posts from './posts';
import feedback from './feedback';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={storePath}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={login} exact />
            <Route path="/dashboared" component={dashboared} />
            <Route path = '/laws' component = {laws} />
            <Route path = '/annoucement' component = {announcement} />
            <Route path = '/edit-laws' component = {editLaws} />
            <Route path = '/posts' component = {posts} />
            <Route path = '/feedback' component = {feedback} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;

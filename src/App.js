import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Login from './Views/Login';
import NewsPage from './Views/NewsPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/news/:id" component={NewsPage} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 
// import logo from './logo.svg';
import React from 'react';
import TweetPage from "./TweetPage";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "./MainPage";

function App() {

  return (
      <Router baseName="/" hashType="slash">
          <Switch>
              <Route path="/tweets">
                  <TweetPage />
              </Route>
              <Route path="/">
                  <MainPage />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;

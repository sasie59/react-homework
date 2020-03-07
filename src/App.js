import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import add from './add';
import './App.css';
// import Homework from './Carousel';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import UserPage from './UserPage';

function App() {
  return (
    <BrowserRouter>
      <h2>use react router</h2>
      <Link to="/">go to home</Link><br/>
      <Link to="/about">go to about</Link><br/>
      <Link to="/user">go to user</Link><br/>
      <br/>
      <br/>
      <Switch>
        <Route path='/about'><AboutPage /></Route>
        <Route path='/user'><UserPage /></Route>
        <Route path='/'><HomePage /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

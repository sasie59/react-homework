import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import add from './add';
import './App.css';
// import Homework from './Carousel';

import HomePage from './HomePage';
import HW1Counter from './HW1Counter';
import ReduxPage from './ReduxPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/HW1Counter'><HW1Counter /></Route>
        <Route path='/ReduxPage'><ReduxPage /></Route>
        <Route path='/'><HomePage /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

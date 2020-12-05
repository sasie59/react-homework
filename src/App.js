import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import add from './add';
import './App.css';
import ReduxPage from './ReduxPage';
import HomePage from './HomePage';
import HW1Counter from './HW1Counter';
import HW2CounterList from './HW2CounterList';
import HW3CounterSum from './HW3CounterSum';
import HW4Bmi from './HW4Bmi';
import HW5itemList from './HW5ItemList';
import HW6RemovableList from './HW6RemovableList';
import HW7PersonTable from './HW7PersonTable';
import HW8SumForButton from './HW8SumForButton';
import HW9HappyNewYear from './HW9HappyNewYear';
import HW10Currency from './HW10Currency';
import HW11ColorPad from './HW11ColorPad';
import HW12Tab from './HW12Tab';
import HW13TodoList from './HW13TodoList';
import HW14Pokemon from './HW14Pokemon';
// import HW15LengthConversion from './HW15LengthConversion';
import HW16NumberGame from './HW16NumberGame';
import HW17RandomNum from './HW17RandomNum';
import HW18TwinkingChar from './HW18TwinklingChar';
import HW19Gopher from './HW19Gopher';
import HW20GuessNum from './HW20GuessNum';
import HW21XaXb from './HW21XAXB';
import HW22Cart from './HW22Cart';
import HW23SunMoon from './HW23SunMoon';
// import HW24Lottery from './HW24Lottery';
import HW25Modal from './HW25Modal';
import HW26Tooltip from './HW26Tooltip';
import HW27Carousel from './HW27Carousel';
// import Redux from './Redux';
import TodoList from './TodoList';
// import TodoList1 from './TodoList1';
// import TodoList2 from './TodoList2';
// import TodoList3 from './TodoList3';
// import TodoList4 from './TodoList4';
import TodoList6 from './TodoList6';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/HW1Counter'><HW1Counter /></Route>
        <Route path='/HW2CounterList'><HW2CounterList /></Route>
        <Route path='/HW3CounterSum'><HW3CounterSum /></Route>
        <Route path='/HW4Bmi'><HW4Bmi /></Route>
        <Route path='/HW5itemList'><HW5itemList /></Route>
        <Route path='/HW6RemovableList'><HW6RemovableList /></Route>
        <Route path='/HW7PersonTable'><HW7PersonTable /></Route>
        <Route path='/HW8SumForButton'><HW8SumForButton /></Route>
        <Route path='/HW9HappyNewYear'><HW9HappyNewYear /></Route>
        <Route path='/HW10Currency'><HW10Currency /></Route>
        <Route path='/HW11ColorPad'><HW11ColorPad /></Route>
        <Route path='/HW12Tab'><HW12Tab /></Route>
        <Route path='/HW13TodoList'><HW13TodoList /></Route>
        <Route path='/HW14Pokemon'><HW14Pokemon /></Route>
        {/*<Route path='/HW15LengthConversion'><HW15LengthConversion /></Route>*/}
        <Route path='/HW16NumberGame'><HW16NumberGame /></Route>
        <Route path='/HW17RandomNum'><HW17RandomNum /></Route>
        <Route path='/HW18TwinkingChar'><HW18TwinkingChar /></Route>
        <Route path='/HW19Gopher'><HW19Gopher /></Route>
        <Route path='/HW20GuessNum'><HW20GuessNum /></Route>
        <Route path='/HW21XaXb'><HW21XaXb /></Route>
        <Route path='/HW22Cart'><HW22Cart /></Route>
        <Route path='/HW23SunMoon'><HW23SunMoon /></Route>
        {/*<Route path='/HW24Lottery'><HW24Lottery /></Route>*/}
        <Route path='/HW25Modal'><HW25Modal /></Route>
        <Route path='/HW26Tooltip'><HW26Tooltip /></Route>
        <Route path='/HW27Carousel'><HW27Carousel /></Route>
        <Route path='/ReduxPage'><ReduxPage /></Route>
        {/* <Route path='/Redux'><Redux /></Route> */}
        <Route path='/TodoList'><TodoList /></Route>
        {/* <Route path='/TodoList1'><TodoList1 /></Route> */}
        {/* <Route path='/TodoList2'><TodoList2 /></Route> */}
        {/* <Route path='/TodoList3'><TodoList3 /></Route> */} */}
        {/* <Route path='/TodoList4'><TodoList4 /></Route> */}
        <Route path='/TodoList6'><TodoList6 /></Route>
        <Route path='/'><HomePage /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

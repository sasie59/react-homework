import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>use react router</h2>
        <Link to='/HW1Counter'>HW1Counter</Link><br/>
        <Link to='/HW2CounterList'>HW2CounterList</Link><br/>
        <Link to='/HW3CounterSum'>HW3CounterSum</Link><br/>
        <Link to='/HW4Bmi'>HW4Bmi</Link><br/>
        <Link to='/HW5ItemList'>HW5ItemList</Link><br/>
        <Link to='/HW6RemovableList'>HW6RemovableList</Link><br/>
        <Link to='/HW7PersonTable'>HW7PersonTable</Link><br/>
        <Link to='/HW8SumForButton'>HW8SumForButton</Link><br/>
        <Link to='/HW9HappyNewYear'>HW9HappyNewYear</Link><br/>
        <Link to='/HW10Currency'>HW10Currency</Link><br/>
        <Link to='/HW11ColorPad'>HW11ColorPad</Link><br/>
        <Link to='/HW12Tab'>HW12Tab</Link><br/>
        <Link to='/HW13TodoList'>HW13TodoList</Link><br/>
        <Link to='/HW14Pokemon'>HW14Pokemon</Link><br/>
        <Link to='/HW15LengthConversion'>HW15LengthConversion</Link><br/>
        <Link to='/HW16NumberGame'>HW16NumberGame</Link><br/>
        <Link to='/HW17RandomNum'>HW17RandomNum</Link><br/>
        <Link to='/HW18TwinkingChar'>HW18TwinkingChar</Link><br/>
        <Link to='/HW19Gopher'>HW19Gopher</Link><br/>
        <Link to='/HW20GuessNum'>HW20GuessNum</Link><br/>
        <Link to='/HW21XaXb'>HW21XaXb</Link><br/>
        <Link to='/HW22Cart'>HW22Cart</Link><br/>
        <Link to='/HW23SunMoon'>HW23SunMoon</Link><br/>
        <Link to='/HW24Lottery'>HW24Lottery</Link><br/>
        <Link to='/HW25Modal'>HW25Modal</Link><br/>
        <Link to='/HW26Tooltip'>HW26Tooltip</Link><br/>
        <Link to='/HW27Carousel'>HW27Carousel</Link><br/>
        {/* <Link to='/ReduxPag'>ReduxPage</Link><br/> */}
        <Link to='/Redux'>Redux</Link>
      </div>
    )
  }
}

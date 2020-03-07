import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>use react router</h2>
        <Link to="/ReduxPage">ReduxPage</Link><br/>
        <Link to="/HW1Counter">HW1Counter</Link><br/>
      </div>
    )
  }
}

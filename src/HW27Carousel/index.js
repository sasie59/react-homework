import React, { Component } from 'react';
import Carousel from './Carousel';

import "./index.css";

export default class HW27Carousel extends Component {
  render() {
    return (
      <div>
        <Carousel time={1500} showDots>
          <div className="a">a</div>
          <div className="b">b</div>
          <div className="c">c</div>
        </Carousel>
      </div>
    )
  }
}

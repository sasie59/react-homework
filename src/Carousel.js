import React, { Component } from 'react';
import CarouselCpm from './CarouselCpm'

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <CarouselCpm>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </CarouselCpm> 
      </div>
    )
  }
}

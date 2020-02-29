import React, { Component } from 'react';
import CarouselCpm from './CarouselCpm';
import './Carousel.css'

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <CarouselCpm showDots time={1500}>
          <div className='red'>1</div>
          <div className='green'>2</div>
          <div className='blue'>3</div>
        </CarouselCpm> 
      </div>
    )
  }
}

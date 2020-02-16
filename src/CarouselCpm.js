import React from 'react';
import './Carousel.css';

export default function CarouselCpm(props) {
  return (
    <div className='carousel'>
      {props.children}
    </div>
  )
}

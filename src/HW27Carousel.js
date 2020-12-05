// import React, { Component } from 'react';
// import CarouselCpm from './CarouselCpm';
// import './Carousel.css'

// export default class Carousel extends Component {
//   render() {
//     return (
//       <div>
//         <CarouselCpm showDots time={1500}>
//           <div className='red'>1</div>
//           <div className='green'>2</div>
//           <div className='blue'>3</div>
//         </CarouselCpm> 
//       </div>
//     )
//   }
// }
import React, { Component } from 'react';
import HW27CarouselCpm from './HW27CarouselCpm';
export default class HW27Carousel extends Component {
  render() {
    return (
      <div>
        <HW27CarouselCpm time={1500}>
          <div style={{
            'backgroundColor': 'red',
            'height': '100%',
          }}>1</div>
          <div style={{
            'backgroundColor': 'green',
            'height': '100%',
          }}>2</div>
          <div style={{
            'backgroundColor': 'blue',
            'height': '100%',
          }}>3</div>
        </HW27CarouselCpm>
      </div>
    );
  }
}



































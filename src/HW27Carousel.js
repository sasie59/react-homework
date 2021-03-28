import React from "react";
import HW27CarouselCpm from "./HW27CarouselCpm";

export default function HW27Carousel() {
  return (
    <div>
      <HW27CarouselCpm time={1500}>
        <div
          style={{
            key: 'red',
            backgroundColor: "red",
            height: "100%",
          }}
        >
          1
        </div>
        <div
          style={{
            key: 'green',
            backgroundColor: "green",
            height: "100%",
          }}
        >
          2
        </div>
        <div
          style={{
            key: 'blue',
            backgroundColor: "blue",
            height: "100%",
          }}
        >
          3
        </div>
      </HW27CarouselCpm>
    </div>
  );
}

// import React, { Component } from 'react';
// import HW27CarouselCpm from './HW27CarouselCpm';
// export default class HW27Carousel extends Component {
//   render() {
//     return (
//       <div>
//         <HW27CarouselCpm time={1500}>
//           <div style={{
//             'backgroundColor': 'red',
//             'height': '100%',
//           }}>1</div>
//           <div style={{
//             'backgroundColor': 'green',
//             'height': '100%',
//           }}>2</div>
//           <div style={{
//             'backgroundColor': 'blue',
//             'height': '100%',
//           }}>3</div>
//         </HW27CarouselCpm>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';

export default class HW11ColorPad extends Component {
  constructor() {
    super();
    this.state = {
      r: 150,
      g: 100,
      b: 200
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const { r, g, b } = this.state;
    return (
      <div>
        <h1>HW11ColorPad</h1>
        <h1>調色盤</h1>
        <div style={{
          width: "200px",
          height: "200px",
          margin: "0 auto",
          backgroundColor: `rgb(${r},${g},${b})`
        }} />
        <input
          type="range"
          min="0"
          max="255"
          name='r'
          value={r}
          data-testid='red'
          onChange={this.handleChange}
        />R<br />
        <input
          type="range"
          min="0"
          max="255"
          name='g'
          value={g}
          data-testid='green'
          onChange={this.handleChange}
        />G<br />
        <input
          type="range"
          min="0"
          max="255"
          name='b'
          value={b}
          data-testid='blue'
          onChange={this.handleChange}
        />B
      </div>
    );
  }
}

// import React, { useState } from "react";

// export default function HW11ColorPad() {
//   const [pad, setPad] = useState({
//     r: 0,
//     g: 150,
//     b: 150,
//   });

//   const handleChange = (color, { target }) => {
//     setPad({
//       ...pad,
//       [color]: target.value
//     });
//   };
//   // 展開後 再去改變他們各自的值

//   return (
//     <div>
//       <h1>HW11ColorPad</h1>
//       <h1>調色盤</h1>
//       <div
//         style={{
//           width: "200px",
//           height: "200px",
//           margin: "0 auto",
//           backgroundColor: `rgb(${pad.r},${pad.g},${pad.b})`,
//         }}
//       />
//       R
//       <input
//         type="range"
//         min="0"
//         max="255"
//         data-testid='red'
//         onChange={handleChange.bind(this, 'r')}
//       />{pad.r}
//       <br />
//       G
//       <input
//         type="range"
//         min="0"
//         max="255"
//         data-testid='green'
//         onChange={handleChange.bind(this, 'g')}
//       />{pad.g}
//       <br />
//       B
//       <input
//         type="range"
//         min="0"
//         max="255"
//         data-testid='blue'
//         onChange={handleChange.bind(this, 'b')}
//       />{pad.b}
//       <br />
//     </div>
//   );
// }

// import React, { Component } from 'react';

// export default class HW11ColorPad extends Component {
//   constructor() {
//     super();
//     this.state = {
//       r : 0,
//       g : 0,
//       b : 0
//     };
//   }
//   handleChangle = ({target}) => {
//     this.setState ({
//       [target.name] : target.value
//     });
//   }

//   render() {
//     const {r, g, b} = this.state;
//     return (
//       <div>
//         <h1>調色盤</h1>
//         <input name="r" value={r} type="range" min="0" max="255" onChange={this.handleChangle} />
//         <input name="g" value={g} type="range" min="0" max="255" onChange={this.handleChangle} />
//         <input name="b" value={b} type="range" min="0" max="255" onChange={this.handleChangle} />
//         <div style={{
//           width : '200px',
//           height : '200px',
//           backgroundColor : `rgb(${r},${g},${b})`
//         }}>
//         </div>
//       </div>
//     );
//   }
// }

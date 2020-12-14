import React, { useState } from "react";

export default function HW11ColorPad() {
  const [pad, setPad] = useState({
    r: 0,
    g: 150,
    b: 150,
  });

  const handleChange = (color, {target}) => {
    setPad({
      ...pad,
      [color]: target.value
    });
  };
  // 展開後 再去改變他們各自的值

  return (
    <div>
      <h1>HW11ColorPad</h1>
      <h1>調色盤</h1>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "0 auto",
          backgroundColor: `rgb(${pad.r},${pad.g},${pad.b})`,
        }}
      />
      R
      <input
        type="range"
        min="0"
        max="255"
        onChange={handleChange.bind(this, 'r')}
      />{pad.r}
      <br />
      G
      <input
        type="range"
        min="0"
        max="255"
        onChange={handleChange.bind(this, 'g')}
      />{pad.g}
      <br />
      B
      <input
        type="range"
        min="0"
        max="255"
        onChange={handleChange.bind(this, 'b')}
      />{pad.b}
      <br />
    </div>
  );
}
// 錯誤警告
// Warning: A component is changing a controlled input
//  of type range to be uncontrolled. Input elements should not
//   switch from controlled to uncontrolled (or vice versa). 
//   Decide between using a controlled or uncontrolled 
//   input element for the lifetime of the component.

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

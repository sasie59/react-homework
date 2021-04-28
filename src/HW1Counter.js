// class
// import React, { Component } from "react";

// export default class HW1Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   handleClick = () => [
//     this.setState({
//       count: this.state.count + 1
//     })
//   ]

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1>複習React & hooks</h1>
//         <button onClick={this.handleClick}>請按我 : {count}</button>
//       </div>
//     );
//   }
// }
// hooks
import React,{useState} from 'react';

export default function HW1Counter() {
  const [count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>複習React & Hooks & Jest</h1>
      <button onClick={handleClick}>Click Me : {count} </button>
    </div>
  );
}


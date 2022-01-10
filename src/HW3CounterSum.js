// import React, { useState } from "react";

// export default function HW3CounterSum() {
//   const [count, setCount] = useState(0);
//   const [sum, setSum] = useState(0);
//   return (
//     <div>
//       <h1>HW3CounterSum</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setSum(sum + count);
//         }}>add
//       </button><br />
//       {sum}
//     </div>
//   );
// }

import React,{useState} from 'react';

export default function HW3CounterSum() {
  const [counter, setCounter] = useState(1);
  const [sum, setSum] = useState(0);
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(1);
  const [sum3, setSum3] = useState(100000000000);

  const handleAdd = () => {
    setCounter(counter + 1);
    setSum(sum + counter);
  };

  const handleSubtract = () => {
    setCounter(counter + 1);
    setSum1(sum1 - counter);
  };

  const handleMultiply = () => {
    setCounter(counter + 1);
    setSum2(sum2 * counter);
  };

  const handleDivide = () => {
    setCounter(counter + 1);
    setSum3(sum3 / counter);
  };
  return (
    <div>
      <h1>HW3CounterSum</h1>
      <button data-testid="add" onClick={handleAdd}>add</button><br/>
      {sum}<br/>
      <button data-testid="subtract" onClick={handleSubtract}>subtract</button><br/>
      {sum1}<br/>
      <button data-testid="multiply" onClick={handleMultiply}>multiply</button><br/>
      {sum2}<br/>
      <button data-testid="divide" onClick={handleDivide}>divide</button><br/>
      {sum3}<br/>
    </div>
  );
}

// import React, { Component } from 'react';

// export default class HW3CounterSum extends Component {
//   constructor(){
//     super();
//     this.state = ({
//       counter : 1,
//       sum : 0,
//       sum1 : 100,
//       sum2 : 1,
//       sum3 : 10000000000000000000
//     });
//   }

//   handleAdd = () => {
//     this.setState({
//       counter : this.state.counter + 1,
//       sum : this.state.sum + this.state.counter
//     });
//   }

// handleSubtract = () => {
//   this.setState({
//     counter : this.state.counter + 1,
//     sum1 : this.state.sum1 - this.state.counter
//   });
// }

//   handleMultiply = () => {
//     this.setState({
//       counter : this.state.counter + 1,
//       sum2 : this.state.sum2 * this.state.counter
//     });
//   }

//   handleDivide = () => {
//     this.setState({
//       counter : this.state.counter + 1,
//       sum3 : this.state.sum3 / this.state.counter
//     });
//   }



//   render() {
//     const { sum, sum1, sum2, sum3 } = this.state;
//     return (
//       <div>
//         c
//         <button onClick={this.handleAdd}>加</button><br/>
//         {sum}<br />
//         <button onClick={this.handleSubtract}>減</button><br/>
//         {sum1}<br />
//         <button onClick={this.handleMultiply}>乘</button><br/>
//         {sum2}<br />
//         <button onClick={this.handleDivide}>除</button><br/>
//         {sum3}
//       </div>
//     );
//   }
// }
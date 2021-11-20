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
import React, { Component } from 'react';

export default class HW3CounterSum extends Component {
  constructor(){
    super();
    this.state = ({
      counter : 1,
      sum : 0,
      sum1 : 100,
      sum2 : 1,
      sum3 : 10000000000000000000
    });
  }

  handleAdd = () => {
    this.setState({
      counter : this.state.counter + 1,
      sum : this.state.sum + this.state.counter
    });
  }

handleSubtract = () => {
  this.setState({
    counter : this.state.counter + 1,
    sum1 : this.state.sum1 - this.state.counter
  });
}

  handleMultiply = () => {
    this.setState({
      counter : this.state.counter + 1,
      sum2 : this.state.sum2 * this.state.counter
    });
  }

  handleDivide = () => {
    this.setState({
      counter : this.state.counter + 1,
      sum3 : this.state.sum3 / this.state.counter
    });
  }



  render() {
    const { sum, sum1, sum2, sum3 } = this.state;
    return (
      <div>
        <h1>HW3CounterSum</h1>
        <button onClick={this.handleAdd}>加</button><br/>
        {sum}<br />
        <button onClick={this.handleSubtract}>減</button><br/>
        {sum1}<br />
        <button onClick={this.handleMultiply}>乘</button><br/>
        {sum2}<br />
        <button onClick={this.handleDivide}>除</button><br/>
        {sum3}
      </div>
    );
  }
}

// import React from 'react';

// export default class HW3CounterSum extends React.Component {
//   constructor(){
//     super();
//     this.state = ({
//       sum : 0,
//       counter : 1,
//     });
//   }

//   handleClick = () => {
//     const sum = this.state.sum;
//     const counter = this.state.counter;
//     this.setState({
//       counter : counter + 1,
//       sum : sum + counter
//       // 本打算用梯型工式來算總和 但好像不用那麼麻煩

//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}><b>add it</b></button><br />
//         {this.state.sum}
//       </div>
//     );
//   }
// }

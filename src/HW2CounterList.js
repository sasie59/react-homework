// import React from 'react';

// export default class HW2CounterList extends React.Component {
//   constructor(){
//     super();
//     this.state = ({
//       list : [],
//       counter : 0
//     });
//   }
//   // HW2: 2019/11/05: 不清楚 map 的使用時機，
//   // data binding 觀念不夠深入（資料變介面即改變）
//   // ，push 為自身改變函數，不需再給其他變數。

//   handleClick = () => {
//     // const counter = this.state.counter;
//     // const list  = this.state.list;

//     const { counter, list } = this.state;
//     this.setState({
//       counter : counter + 1,
//       list : [counter + 1, ...list]
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>HW2CounterList</h1>
//         <button onClick={this.handleClick}>submit</button><br />
//         <ul>
//           {this.state.list.map(n =>
//             <li key={n}>{n}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
// import React, { useState } from "react";

// export default function HW2CounterList() {
//   const [count, setCount] = useState(0);
//   const [arr, setArr] = useState([]);

//   return (
//     <div>
//       <h1>HW2CounterList</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setArr([count + 1, ...arr]);
//         }}>
//         click me
//       </button>
//       <ul>
//         {arr.map((n) => (
//           <li key={n}>{n}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// class
// import React, { Component } from 'react';

// export default class HW2CounterList extends Component {
//   constructor(){
//     super();
//     this.state = ({
//       list: [],
//       count: 0,
//     });
//   }
//   handleClick = () => {
//     this.setState({
//       list : [this.state.count + 1, ...this.state.list],
//       count : this.state.count + 1,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>複習React & Hooks & Jest</h1>
//         <button onClick={this.handleClick}>click me</button>
//         <ul>
//           {this.state.list.map(item => 
//             <li key={item}>{item}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// hooks;
import React,{useState} from 'react';

export default function HW2CounterList() {
  const [count, setCount] = useState(0);
  const [list, setList ] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
    setList([count + 1, ...list]);
  };
  return (
    <div>
      <h1>複習React & Hooks & Jest</h1>
      <button onClick={handleClick}>click me</button>
      <ul>
        {list.map(item =>
          <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  );
}





import React, { useState } from 'react';

export default function Counter() {
  const [ count, setCount] = useState(0);
  const [ count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <h1>HW1Counter</h1>
      <button onClick={handleClick}>click me : {count2}</button>
    </div>
  );
}


// export default class Counter extends React.Component {
//   constructor(){
//     super();
//     this.state = ({
//       counter: 0 
//     });
//   }
//   handleChangeCounter = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>HW1Counter</h1>
//         <button onClick={this.handleChangeCounter}>counter : {this.state.counter}</button>
//       </div>
//     );
//   }
// }

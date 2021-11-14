import React, { Component } from 'react';

export default class HW2CounterList extends Component {
  constructor() {
    super();
    this.state = ({
      count: 0,
      list: []
    });
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      list: [this.state.count + 1, ...this.state.list]
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <ul>
          {this.state.list.map(item =>
            <li key={item}>
              {item}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

// hooks
// import React, { useState } from 'react';

// export default function HW2CounterList() {

//   const [count, setCount] = useState(1);
//   const [list, setList] = useState([]);

//   const handleClick = () => {
//     setCount(count + 1);
//     setList([count, ...list]);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       <ul>
//         {list.map(item =>
//           <li key={item}>
//             {item}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }

// import React, { useState, useRef } from 'react';

// export default function HW5ItemList() {

//   const [list, setList] = useState([]);
//   const itemDom = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setList([itemDom.current.value, ...list]);
//     itemDom.current.value = '';
//   };

//   return (
//     <div>
//       <h1>HW5ItemList</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           ref={itemDom}
//           placeholder='do something...'
//         />
//       </form>
//       <ul>
//         {list.map((item) =>
//           <li key={item}>{item}</li>
//         )}
//       </ul>
//     </div>
//   );
// }
import React,{useState, useRef} from 'react';

export default function HW5ItemList() {
  const [list, setList] = useState([]);
  const inputDom = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([inputDom.current.value, ...list]);
    inputDom.current.value = '';

  };

  return (
    <div>
      <h1>HW5ItemList</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          ref={inputDom}
        />
      </form>
      <ul>
        {list.map(item => 
          <li key={item}>
            {item}
          </li>
        )}
      </ul>
    </div>
  );
}

// import React, { Component } from 'react';

// export default class HW5ItemList extends Component {
//   constructor() {
//     super();
//     this.state = ({
//       value: '',
//       list: []
//     });
//   }

//   handleChange = (e) => {
//     this.setState({
//       value: e.target.value
//     });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       list: [this.state.value, ...this.state.list],
//       value: ''
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>HW5ItemList</h1>
//         <form
//           action=""
//           onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//             placeholder="do something..."
//           />
//         </form>
//         <ul>
//           {this.state.list.map(item =>
//             <li key={item}>
//               {item}
//             </li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

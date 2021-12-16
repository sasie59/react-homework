
import React, { useRef, useState } from 'react';

export default function HW6RemovableList() {

  const [list, setList] = useState([]);
  const itemDom = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([itemDom.current.value, ...list]);
    itemDom.current.value = '';
  };

  return (
    <div>
      <h1>HW6RemovableList</h1>
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          ref={itemDom}
        />
      </form>
      <ul>
        {list.map((item, index) =>
          <li key={item}>
            {item}
            <button
              data-testid={index}
              onClick={() =>
                setList.bind(index)(
                  [...list.slice(0, index), ...list.slice(index + 1)]
                )
              }
            >移除</button>
          </li>
        )}
      </ul>
    </div>
  );
}


// import React, { Component } from 'react';

// export default class HW6RemovableList extends Component {
//   constructor() {
//     super();
//     this.state = ({
//       list: [],
//       value: ''
//     });
//   }

//   handleChange = ({ target }) => {
//     this.setState({
//       value: target.value
//     });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.value !== '')
//       this.setState({
//         list: [this.state.value, ...this.state.list],
//         value: ''
//       });
//   }

//   handleRemove = (index) => {
//     const filterList = this.state.list.filter((item, index1) =>
//       index !== index1
//     );
//     this.setState({
//       list: filterList
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>HW6RemovableList</h1>
//         <form
//           action=""
//           onSubmit={this.handleSubmit}
//         >
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </form>
//         <ul>
//           {this.state.list.map((item, index) =>
//             <li key={item}>
//               {item}
//               <button
//                 onClick={this.handleRemove.bind(this, index)}
//                 data-testid={index}
//               >移除</button>
//             </li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
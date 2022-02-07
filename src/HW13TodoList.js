// import React, { useState } from "react";
// import style from './style.module.scss';

// export default function HW13TodoList() {
//   const [list, setList] = useState([]);
//   const [value, setValue] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setList([{ content: value, done: false }, ...list]);
//     setValue("");
//   };

//   const handleDone = (index) => {
//     const newList = [...list];
//     list[index].done = !list[index].done;
//     setList(newList);
//   };


//   return (
//     <div>
//       <h1>HW13TodoList</h1>
//       <h1>代辦事項</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={value}
//           placeholder='add something ?'
//           onChange={({ target }) => setValue(target.value)}
//         />
//         <button>save</button>
//       </form>
//       {list.map((item, index) => (
//         <div key={index} data-testid={index}>
//           <label className={item.done ? `${style.clear}` : ''}
//             onClick={handleDone.bind(this, index)}
//           >
//             {item.content}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// }
import React,{useState, useRef} from 'react';
import './HW13TodoList.scss';

export default function HW13TodoList() {
  const toDoDom = useRef(); 
  const [list, setList] = useState([]);
  
  const handleSubmit = (e) => {
    const value = toDoDom.current.value;
    e.preventDefault();
    if (value !== "" || value.trim() !== '')
      setList([{ content: value, done: false }, ...list]);
    toDoDom.current.value = '';
  };

  const handleTaggle = (index) => {
    const newList = [...list];
    list[index].done = !list[index].done;
    setList(newList);
  };

  return <div>
    <h1>HW13TodoList</h1>
    <h1>待辦事項</h1>
    <form 
      action=""
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        ref={toDoDom}
        placeholder='do something ?'
      />
      <button>記錄</button>
    </form>
    <ul>
      {list.map((item, index) => 
        <li 
          className={item.done ? "done" : ""}
          data-testid={index}
          key={index}
          onClick={handleTaggle.bind(this, index)}
        >
          {item.content}
        </li>
      )}
    </ul>
  </div>;
}

// import React, { Component } from 'react';
// import './HW13TodoList.scss';

// export default class HW13TodoList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: '',
//       toDoList: []
//     };
//   }
//   handleChange = ({ target }) => {
//     this.setState({
//       value: target.value
//     });
//   }

//   handleSubmit = (e) => {
//     const { value, toDoList } = this.state;
//     e.preventDefault();
//     if (value !== "" || value.trim() !== '')
//       this.setState({
//         toDoList: [{ content: value, done: false }, ...toDoList],
//         value: ''
//       });
//   }

//   handleTaggle = (index) => {
//     const { toDoList } = this.state;
//     toDoList[index].done = !toDoList[index].done;
//     this.setState({
//       toDoList: toDoList
//     });

//   }

//   render() {
//     const { toDoList, value } = this.state;
//     return <div>
//       <h1>HW13TodoList</h1>
//       <h1>待辦事項</h1>
//       <form
//         action=""
//         onSubmit={this.handleSubmit}
//       >
//         <input
//           type="text"
//           value={value}
//           placeholder='do something ?'
//           onChange={this.handleChange}
//         />
//         <button

//         >記錄</button>
//       </form>
//       <ul>
//         {toDoList.map((item, index) =>
//           <li className={item.done ? "done" : ""}
//             key={index}
//             data-testid={index}
//             onClick={this.handleTaggle.bind(this, index)}
//           >
//             {item.content}
//           </li>
//         )}
//       </ul>
//     </div>;
//   }
// }

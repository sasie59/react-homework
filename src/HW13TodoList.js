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
import React, { Component } from 'react';
import './HW13TodoList.scss';

export default class HW13TodoList extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      toDoList: []
    };
  }
  handleChange = ({ target }) => {
    this.setState({
      value: target.value
    });
  }

  handleSubmit = (e) => {
    const { value, toDoList } = this.state;
    e.preventDefault();
    if (value !== "" || value.trim() !== '')
      this.setState({
        toDoList: [{ content: value, done: false }, ...toDoList],
        value: ''
      });
  }

  handleTaggle = (index) => {
    const { toDoList } = this.state;
    toDoList[index].done = !toDoList[index].done;
    this.setState({
      toDoList: toDoList
    });

  }

  render() {
    const { toDoList, value } = this.state;
    return <div>
      <h1>HW13TodoList</h1>
      <h1>待辦事項</h1>
      <form
        action=""
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          value={value}
          placeholder='do something ?'
          onChange={this.handleChange}
        />
        <button

        >記錄</button>
      </form>
      <ul>
        {toDoList.map((item, index) =>
          <li className={item.done ? "done" : ""}
            key={index}
            data-testid={index}
            onClick={this.handleTaggle.bind(this, index)}
          >
            {item.content}
          </li>
        )}
      </ul>
    </div>;
  }
}
// import React, { Component } from 'react';
// import './HW13TodoList.scss';

// export default class HW13TodoList extends Component {
//   constructor(){
//     super();
//     this.state = {
//       toDoList :[],
//       value : ''
//     };
//   }
//   handleChange = ({target}) => {
//     this.setState({
//       value :target.value
//     });
//   }

//   handlSubmit = (event) => {
//     const {value,toDoList} = this.state;
//     event.preventDefault();

//     if(value.trim() !== '')
//       this.setState({
//         toDoList : [{content :value, done :false}, ...toDoList],
//         value : ''
//       });
//   }

//   handleDelete = (index) => {
//     const { toDoList } = this.state;
//     toDoList[index].done = !toDoList[index].done;

//     this.setState({
//       toDoList
//     });
//   }
//   render() {
//     const { value,toDoList } = this.state;
//     const ToDoList = toDoList.map((item,index) =>
//       <tr key={index}>
//         <td className={item.done ? "done" : ""}>
//           <label onClick={this.handleDelete.bind(this, index)}>
//             {item.content}
//           </label>
//         </td>
//       </tr>
//     );
//     return (
//       <div>
//         <form onSubmit={this.handlSubmit}>
//           <input
//             type="text"
//             value={value}
//             placeholder="todo..."
//             onChange={this.handleChange}/>
//           <button>Create!</button>
//         </form>
//         <table>
//           <tbody>
//             {ToDoList}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

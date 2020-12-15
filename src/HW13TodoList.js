import React ,{ useState }from 'react';

export default function HW13TodoList() {

  const [list, setList ] = useState([]);
  const [value, setValue ] = useState('');

  return (
    <div>
      <h1>HW13TodoList</h1>
      <h1>代辦事項</h1>
      <form action="">
        <input type="text"/>
      </form>
    </div>
  );
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

import React, { Component } from 'react';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(){
    super()
    this.state = {
      toDoList :[],
      value : ''
    }
  }
  handleChange = ({target}) => {
    this.setState({
      value :target.value
    });
  }

  handlSubmit = (event) => {
    const {value,toDoList} = this.state;
    event.preventDefault();

    if(value.trim() !== '')
      this.setState({
        toDoList : [{content :value, done :false}, ...toDoList],
        value : ''
      });
  }
  handleDelete = () => {
    const {value,toDoList} = this.state;
    const isDelete = toDoList.done ? false : true
    console.warn(isDelete);
    this.setState({
      toDoList : {content: value, done :isDelete}
      // done : isDelete
    });
    console.warn(isDelete);
  }
  render() {
    const { value,toDoList } = this.state;
    const ToDoList = toDoList.map((item,index) =>
    <tr key={index}>
            <td className={item.done ? "done" : ""}>
              <label onClick={this.handleDelete}>
                {item.content}
              </label>
            </td>
        </tr>
    );
    return (
      <div>
        <form onSubmit={this.handlSubmit}>
          <input
            type="text"
            value={value}
            placeholder="todo..."
            onChange={this.handleChange}/>
          <button>Create!</button>
        </form>
        <table>
          <tbody>
            {ToDoList}
          </tbody>
        </table>  
      </div>
    )
  }
}

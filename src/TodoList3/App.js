import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todo.css';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  setVisibilityFilter,
} from './actions';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: '',
      isDone: false
    };
  }

  handleChange = ({target}) => {
    this.setState({
      value: target.value
    });
  }

  handleSubmit =(event) => {
    event.preventDefault();
    this.props.add(this.state.value);
    this.setState({
      value: ''
    });
  }

  handleToggle = (index) => {
    this.props.toggle(index);
    this.setState({
      isDone: !this.state.isDone
    });
  }

  handleRemove = index => {
    this.props.remove(index);
  }

  render() {
    console.warn(this.props);
    return (
      <div>
        <select name="" id="">
          <option>全部</option>
          <option>已完成</option>
          <option>未完成</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}/>
          <button>按我</button>
        </form>
        <ul>
          {this.props.todos.map((todo, index) =>
            <li key={index} >
              <div className={todo.completed ? 'through' : ''} onClick={this.handleToggle.bind(this, index)}>
                {todo.text}
              </div>
              <button onClick={this.handleRemove.bind(this, index)}>移除</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
// 我有bind(index) 但在按的時候還是會全部影響(toggle)
// Ans: 應由每個待辦事項的「completed」來決定是否套用「through」
// 不應該由單一變數「isDone」來決定是否套用「through」
// 既然你三個待辦事項的「throught」依賴於單一變數「isDone」
// 那當然你 isDone 會套到所有待辦事項
// 應該要依賴 completed ，但在這頁也沒看到你有寫 completed

// remove沒有移除? 但也bind (index)
// Ans: 你的 REMOVE_TODO 在 reducer/todos 寫錯了 

const mapStateProps = state => {
  return {
    filter: state.VisibilityFilter,
    todos: state.todos
  };
};
// 抓不到state.VisibilityFilter的資料
const mapDispatchProps = dispatch => {
  return {
    add: (text) => dispatch(addTodo(text)),
    toggle: (index) => dispatch(toggleTodo(index)),
    remove: (index) => dispatch(removeTodo(index)),
    setFilter: (filter) => dispatch(setVisibilityFilter(filter))
  };
};
export default connect(mapStateProps, mapDispatchProps)(App);
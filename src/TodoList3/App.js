import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  setVisibilityFilter,
  VisibilityFilter
} from './actions';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = ({target}) => {
    this.setState({
      value: target.value
    });
  }

  handleSubmit =(e) => {
    e.preventDefault();
    this.props.add(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    console.warn(this.props);
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}/>
          <button>按我</button>
        </form>
        <ul>
          {this.props.todos.map((todo,index) =>
            <li>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    filter: state.VisibilityFilter,
    todos: state.todos
  };
};

const mapDispatchProps = dispatch => {
  return {
    add: (text) => dispatch(addTodo(text)),
    toggle: (index) => dispatch(toggleTodo(index)),
    remove: (index) => dispatch(removeTodo(index)),
    setFilter: (filter) => dispatch(setVisibilityFilter(filter))
  };
};
export default connect(mapStateProps, mapDispatchProps)(App);
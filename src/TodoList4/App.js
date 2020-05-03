import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addTodo, toggleTodo, removeTodo } from './actions/todos';
import { visibilityFilter, ALL, FINISH, UNFINISH } from './actions/visibilityFilter';
import './todo.scss';

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.value);
    this.setState({
      value: ""
    });
  }
  
  handleToggle = (id) => {
    this.props.toggle(id);
  }

  handleRemove = (id) => {
    this.props.remove(id);
  }

  handleFilterChange = ({target}) => {
    this.props.setFiter(target.value);
  }

  render() {
    return (
      <div>
        <select onChange={this.handleFilterChange}>
          <option value={ALL}>全部</option>
          <option value={FINISH}>已完成</option>
          <option value={UNFINISH}>未完成</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} type="text"/>
          <button>click</button>
        </form>
        <ul>
          {this.props.todos.filter(todo => {
            if(this.props.visibilityFilter === ALL) { return true;}
            if(this.props.visibilityFilter === FINISH) { return todo.completed;}
            if(this.props.visibilityFilter === UNFINISH) { return !todo.completed;}
          }).map(todo => 
            <li key={todo.id}>
              <span onClick={this.handleToggle.bind(this, todo.id)} className={todo.completed ? 'through' : ''}>
                {todo.text}
              </span><br />
              <button onClick={this.handleRemove.bind(this, todo.id)}>remove</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function mapState2Props(state) {
  return state;
};

function mapDispatch2Props(dispatch) {
  return {
    add: (text) => dispatch(addTodo(text)),
    toggle: (id) => dispatch(toggleTodo(id)),
    remove: (id) => dispatch(removeTodo(id)),
    setFiter: (filter) => dispatch(visibilityFilter(filter))
  };
};

export default connect(mapState2Props, mapDispatch2Props)(App);

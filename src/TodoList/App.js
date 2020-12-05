import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addTodo, toggleTodo, removeTodo } from './actions/todos';
import {visibilityFilter } from './actions/visibilityFilter';
import {ALL, FINISH, UNFINISH } from './actions/visibilityFilter';

import './todo.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    };
  }

handleChange = (e) => {
  this.setState({
    value: e.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.add(this.state.value);
  this.setState({
    value: ''
  });
}

handleToggle = (id) => {
  this.props.toggle(id);
}
handleReomve = (id) => {
  this.props.remove(id);
}
handleFilterChange = (e) => {
  this.props.filter(e.target.value);
}

render() {
  const { value } = this.state;
  return (
    <div>
      <select onChange={this.handleFilterChange} value={this.props.visibilityFilter}>
        <option value={ALL}>全部</option>
        <option value={FINISH}>已完成</option>
        <option value={UNFINISH}>未完成</option>
      </select>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={value} type="text"/>
        <button>click</button>
      </form>
      <ol>
        {this.props.todos.filter(todo => {
          if(this.props.visibilityFilter === ALL ) return true;
          if(this.props.visibilityFilter === FINISH) return todo.completed;
          if(this.props.visibilityFilter === UNFINISH ) return !todo.completed;
        }).map(todo =>
          <li key={todo.id}>
            <div className={todo.completed ? 'line' : ''}>
              {todo.text}
            </div>
            <button onClick={this.handleToggle.bind(this,todo.id)}>toggle</button>
            <button onClick={this.handleReomve.bind(this,todo.id)}>remove</button>
          </li>
        )}
      </ol>
    </div>
  );
}
}

const  mapState2Props = (state) => {
  return state;
};

const mapDispatch2Props = (dispatch) => {
  return {
    add: (text) => dispatch(addTodo(text)),
    toggle: (id) => dispatch(toggleTodo(id)),
    remove: (id) => dispatch(removeTodo(id)),
    filter: (filter) => dispatch(visibilityFilter(filter)),
  };
};

export default connect(mapState2Props, mapDispatch2Props )(App);

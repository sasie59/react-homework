import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo, toggleTodo, removeTodo } from './actions/todos';
import { visibilityFilter,ALL, FINISH, UNFINISH } from './actions/visibilityFilter';
import './todo.scss';
class App extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = ({target})=> {
    this.setState({
      value: target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.value);
    this.setState({
      value: ''
    });
  }

  handleRemove = (id) => {
    this.props.remove(id);
  }
  handleToggle = (id) => {
    this.props.toggle(id);
  }

  handleFilterChange = (e) => {
    this.props.setFilter(e.target.value);
  }

  render() {
    return (
      <div>
        <select onChange={this.handleFilterChange} value={this.props.visibilityFilter}>
          <option value={ALL}>全部</option>
          <option value={FINISH}>已完成</option>
          <option value={UNFINISH}>未完成</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.value} type="text"/>
          <button>click</button>
        </form>
        <ul>
          {this.props.todos.filter(todo => {
            if(this.props.visibilityFilter === ALL) {return true;}
            if(this.props.visibilityFilter === FINISH) {return todo.completed;}
            if(this.props.visibilityFilter === UNFINISH) {return !todo.completed;}
          }).map(todo =>
            <li key={todo.id}>
              <span className={todo.completed ? 'through' : ''}>
                {todo.text}
              </span>
              <button onClick={this.handleToggle.bind(this, todo.id)}>toggle</button>
              <button onClick={this.handleRemove.bind(this, todo.id)}>remove</button>
            </li>
          )}
        </ul>
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
    setFilter: (filter) => dispatch(visibilityFilter(filter)),
  };
};

export default connect(mapState2Props, mapDispatch2Props)(App);

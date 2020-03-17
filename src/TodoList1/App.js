import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions'; 

const {
  SHOW_COMPLETED,
  SHOW_ALL,
  SHOW_ACTIVE
} = VisibilityFilters;

class App extends Component {
  constructor(props){
    console.warn();
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
  handleToggle = (index) => {
    this.props.toggle(index);
  }

  handleRemove = (index) => {
    this.props.remove(index);
  }
  handleFilter = ({target}) => {
    this.props.setFilter(target.value);
  }
  
  render() {
    console.warn(this.props);
    return (
      <div>
        <select value={this.props.fFilter} onChange={this.handleFilter}>
          <option value={SHOW_ALL}>all</option>
          <option value={SHOW_COMPLETED}>completed</option>
          <option value={SHOW_ACTIVE}>active</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} type="text" onChange={this.handleChange}/>
          <button>add</button>
        </form>
        <ul>
          {this.props.todos
            .map((todo, index) =>
            <li key={index}>
              {todo.text}
              <button onClick={this.handleToggle.bind(this, index)}>toggle</button>
              <button onClick={this.handleRemove.bind(this, index)}>remove</button>
              {todo.completed ? 'V' : ''}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    filter: state.VisibilityFilters,
    todos: state.todos
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    add: (text) => dispatch(addTodo(text)),
    toggle: (index) => dispatch(toggleTodo(index)),
    remove: (index) => dispatch(removeTodo(index)),
    setFilter: (filter) => dispatch(setVisibilityFilter(filter))
  };
};
export default connect(mapStateProps, mapDispatchProps)(App);
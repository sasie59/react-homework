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
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} = VisibilityFilters;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.value);
    this.setState({ value: '' });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  handleToggle = index => {
    this.props.toggle(index);
  }

  handleRemove = index => {
    this.props.remove(index);
  }

  handleFilterChange = ({ target: { value }}) => {
    this.props.setFilter(value);
  }

  render() {
    const { value } = this.state;
    const { filter } = this.props;
    return (
      <div>
        <select value={filter} onChange={this.handleFilterChange}>
          <option value={SHOW_ALL}>all</option>
          <option value={SHOW_COMPLETED}>completed</option>
          <option value={SHOW_ACTIVE}>active</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
        <ul>
          {this.props.todos
            .filter(todo => {
              if(filter === SHOW_ALL) return true;
              if(filter === SHOW_COMPLETED) return todo.completed;
              if(filter === SHOW_ACTIVE) return !todo.completed;
            })
            .map((todo, index) =>
              <li key={index}>
                {todo.completed && '[v]'}
                {todo.text}
                <button onClick={this.handleToggle.bind(this, index)}>toggle</button>
                <button onClick={this.handleRemove.bind(this, index)}>remove</button>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.visibilityFilters,
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: text => dispatch(addTodo(text)),
    toggle: index => dispatch(toggleTodo(index)),
    remove: index => dispatch(removeTodo(index)),
    setFilter: filter => dispatch(setVisibilityFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
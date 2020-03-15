import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions'; 
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
  
  render() {
    // console.warn(this.props);
    return (
      <div>
        app
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} type="text" onChange={this.handleChange}/>
          <button>add</button>
        </form>
        {this.props.todos.map((todo, index) =>
          <div key={index}>
            {todo.text}
          </div>
        )}
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return state;
};

const mapDispatchProps = (dispatch) => {
  return {
    add: (text) => dispatch(addTodo(text))
  };
};
export default connect(mapStateProps, mapDispatchProps)(App);
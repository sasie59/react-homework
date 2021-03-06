// import React from 'react';
import React,{useState} from 'react';
import { connect } from 'react-redux';

import { visibilityFilter, ALL, FINISH, UNFINISH } from './actions/visibilityFilter';
import { addTodo, toggleTodo, removeTodo } from './actions/todos';

import './App.scss';


function App(props) {
  const [value, setValue ] = useState('');
  const { visibilityFilter: filter } = props;

  const handleChange = ({target}) => {
    setValue(target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(value);
    setValue('');
  };

  const handleFilterChange = ({ target }) => {
    props.filter(target.value);
  };

  const handleToggle = (id) => {
    props.toggle(id);
  };

  const handleRemove = (id) => {
    props.remove(id);
  };
  
  return (
    <div>
      <select data-testid='select' value={filter} onChange={handleFilterChange}>
        <option data-testid='all' value={ALL}>ALL</option>
        <option data-testid='finish' value={FINISH}>FINISH</option>
        <option data-testid='unFinish' value={UNFINISH}>UNFINISH</option>
      </select>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={value} />
        <button>add</button>
      </form>
      {props.todos
        .filter(todo =>
          filter === FINISH ? todo.isFin:
            filter === UNFINISH ? !todo.isFin: true
        )
        .map((todo,index) =>
          <div data-testid={`todo-${index}`} key={todo.id} className={todo.isFin ? 'line': ''}>
            {todo.text}
            <button data-testid={`toggle-${index}`} onClick={handleToggle.bind(this, todo.id)}>toggle</button>
            <button data-testid={`remove-${index}`} onClick={handleRemove.bind(this, todo.id)}>remove</button>
          </div>
        )
      }
    </div>
  );
}


const mapState2Props = state => state;
const mapDispatch2Props = dispatch => {
  return {
    add: payload => dispatch(addTodo(payload)),
    toggle: payload => dispatch(toggleTodo(payload)),
    remove: payload => dispatch(removeTodo(payload)),
    filter: payload => dispatch(visibilityFilter(payload)),
  };
};

export default connect(mapState2Props, mapDispatch2Props)(App);

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       value: ''
//     };
//   }

//   handleChange = ({ target }) => {
//     this.setState({ value: target.value });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.add(this.state.value);
//     this.setState({value: ''});
//   }

//   handleToggle = id => {
//     this.props.toggle(id);
//   }
//   handleRemove = id => {
//     this.props.remove(id);
//   }

//   handleFilterChange = ({ target }) => {
//     this.props.filter(target.value);
//   }
  
//   render() {

//     const { visibilityFilter: filter } = this.props;

//     return (
//       <div>
//         <select value={filter} onChange={this.handleFilterChange}>
//           <option value={ALL}>ALL</option>
//           <option value={FINISH}>FINISH</option>
//           <option value={UNFINISH}>UNFINISH</option>
//         </select>
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.handleChange} type="text" value={this.state.value} />
//           <button>add</button>
//         </form>
//         {this.props.todos
//           .filter(todo =>
//             filter === FINISH ? todo.isFin:
//               filter === UNFINISH ? !todo.isFin: true
//           )
//           .map(todo =>
//             <div key={todo.id} className={todo.isFin ? 'line': ''}>
//               {todo.text}
//               <button onClick={this.handleToggle.bind(this, todo.id)}>toggle</button>
//               <button onClick={this.handleRemove.bind(this, todo.id)}>remove</button>
//             </div>
//           )
//         }
//       </div>
//     );
//   }
// }

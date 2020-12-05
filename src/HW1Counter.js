import React  from 'react';

export default class Counter extends React.Component {
  constructor(){
    super();
    this.state = ({
      counter: 0 
    });
  }
  handleChangeCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (
      <div>
        <h1>HW1Counter</h1>
        <button onClick={this.handleChangeCounter}>counter : {this.state.counter}</button>
      </div>
    );
  }
}

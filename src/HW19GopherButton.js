import React, { Component } from 'react';
import './Gopher.css';

export default class GopherButton extends Component {
  constructor(){
    super();
    this.state = {
      mouse : !Math.floor(Math.random()*2),
    }
  }
  componentDidMount() {
    this.tick();
  }

  tick = () => {
    setTimeout(() => {
      this.changeNum();
      this.tick();
    }, Math.floor(Math.random() * 2000) + 2000)
  }
  
  changeNum = () => {
    this.setState({
      mouse : !this.state.mouse
    })
  }

  handleClick = () => {
    this.props.changeCount(this.state.mouse ? 1 : -1);
    this.setState({
      mouse : false
    })
  }

  render() {
    return (
        <button className='GopherButton' onClick={this.handleClick}>
          <h1>{ this.state.mouse ? 'G': '-' }</h1>
        </button>
    )
  }
}

import React, { Component } from 'react';
import GopherButton from './GopherButton';
export default class Gopher extends Component {
  constructor(){
    super()
    this.state = {
      count : 0,
    }
  }
  
  changeCount = (result) => {
    this.setState({
      count : this.state.count + result
    })
  }
  
  render() {
    const {count} = this.state;
    
    return (
      <div>
        <h1>{count}</h1>
        <GopherButton changeCount={this.changeCount} />
        <GopherButton changeCount={this.changeCount} />
        <GopherButton changeCount={this.changeCount} /><br />
        <GopherButton changeCount={this.changeCount} />
        <GopherButton changeCount={this.changeCount} />
        <GopherButton changeCount={this.changeCount} /><br />
        <GopherButton changeCount={this.changeCount} />
        <GopherButton changeCount={this.changeCount} />
        <GopherButton changeCount={this.changeCount} />
      </div>
    )
  }
}

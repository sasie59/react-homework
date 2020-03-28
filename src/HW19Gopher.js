import React, { Component } from 'react';
import HW19GopherButton from './HW19GopherButton';
export default class HW19Gopher extends Component {
  constructor(){
    super();
    this.state = {
      count : 0,
    };
  }
  
  changeCount = (result) => {
    this.setState({
      count : this.state.count + result
    });
  }
  
  render() {
    const {count} = this.state;
    
    return (
      <div>
        <h1>{count}</h1>
        <HW19GopherButton changeCount={this.changeCount} />
        <HW19GopherButton changeCount={this.changeCount} />
        <HW19GopherButton changeCount={this.changeCount} /><br />
        <HW19GopherButton changeCount={this.changeCount} />
        <HW19GopherButton changeCount={this.changeCount} />
        <HW19GopherButton changeCount={this.changeCount} /><br />
        <HW19GopherButton changeCount={this.changeCount} />
        <HW19GopherButton changeCount={this.changeCount} />
        <HW19GopherButton changeCount={this.changeCount} />
      </div>
    );
  }
}

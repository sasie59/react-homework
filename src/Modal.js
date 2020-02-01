import React, { Component } from 'react';
import Modal1 from './Modal1'
import  './Modal.css';

export default class Modal extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  handleClick = () => {
    // modal跟alert的差別?
  }

  render() {
    const buttonArr = ['modal', 'top', 'header', 'top + animation'].map((item, index) => {
      return <button onClick={this.handleClick} className='button' key={index}>{item}</button>
    })
    return (
      <div>
        {buttonArr}
      </div>
    )
  }
}

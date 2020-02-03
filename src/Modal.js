import React, { Component } from 'react';
import ModalCpm from './ModalCpm'
import  './Modal.css';

export default class Modal extends Component {
  constructor(){
    super();
    this.state = {
      isShow: false
    }
  }

  handleClick = () => {
    // modal跟alert的差別?
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const buttonArr = ['modal', 'top', 'header', 'top + animation'].map((item, index) => {
      return <button onClick={this.handleClick} className='button' key={index}>{item}</button>
    })
    return (
      <div>
        {buttonArr}
        {this.state.isShow && <div className='modal-content'>
          <ModalCpm>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel in nam sint dolorum, eligendi delectus, dolor quos eum magni facere nemo fuga distinctio. Magni possimus aspernatur corrupti impedit laborum!</ModalCpm>
        </div>}
      </div>
    )
  }
}

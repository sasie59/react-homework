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
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const buttonArr = ['modal', 'top', 'header', 'top + animation'].map((item, index) => {
      return <button onClick={this.handleClick} className='button' key={index}>{item}</button>
    })
    return (
      <div className={this.state.isShow ?'gray':'white'}>
        {buttonArr}
        {this.state.isShow && <div>
          <ModalCpm
            isModal={true}
            isTop={true}
            isAnimation={true}
            header={'header'}
            onClick={this.handleClick}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel in nam sint dolorum, eligendi delectus, dolor quos eum magni facere nemo fuga distinctio. Magni possimus aspernatur corrupti impedit laborum!</ModalCpm>
        </div>}
        {/* <ModalCpm header="我是標頭" />
        <ModalCpm isTop={true} />
        <ModalCpm isTop={true} isAnimation={true} /> */}
      </div>
    )
  }
}

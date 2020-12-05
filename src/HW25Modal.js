import React, { Component } from 'react';
import HW25ModalCpm from './HW25ModalCpm';

const modalProps = [
  {},
  {isTop: true},
  {header: "My Header"},
  {isTop: true, isAnimation: true},
  {isAnimation: true},
];

export default class HW25Modal extends Component {
  constructor(){
    super();
    this.state = {
      isShow: false
    };
  }

  handleClick = index => {
    this.setState({
      isShow: !this.state.isShow,
      nowProps: modalProps[index],
    });
  }

  render() {
    
    const buttonArr = ['modal', 'top', 'header', 'top + animation', 'animation'].map((item, index) => {
      return <button onClick={this.handleClick.bind(this, index)} className='button' key={index}>{item}</button>;
    });
    return (
      <div>
        {buttonArr}
        {this.state.isShow && <div>
          <HW25ModalCpm
            {...this.state.nowProps}
            onClick={this.handleClick}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel in nam sint dolorum, eligendi delectus, dolor quos eum magni facere nemo fuga distinctio. Magni possimus aspernatur corrupti impedit laborum!</HW25ModalCpm>
        </div>}
      </div>
    );
  }
}
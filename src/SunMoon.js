import React, { Component } from 'react';
import './SunMoon.css'

export default class SunMoon extends Component {
  constructor (){
    super ();
    this.state = {
      evening : '晚上',
      morning : '早上',
      hideAndSee : true,
    }
  }

  handleClick = () => {
    const change = this.state.hideAndSee ? false : true
    this.setState({
      hideAndSee : change
    })
  }

  render() {
    const {evening, morning, hideAndSee} = this.state;
    return (
      <div>
        <div className='center'>請仔細觀察太陽與月亮的位置，「必須」對準正中央
          <button onClick={this.handleClick}>切換成 {hideAndSee ? `${evening}` : `${morning}`}</button>
        </div>
        <img src="https://img.icons8.com/cotton/256/000000/sun--v1.png" alt=" sum"/>
        <img src="https://img.icons8.com/cotton/256/000000/moon-satellite.png" alt="moon"/>
      </div>
    )
  }
}

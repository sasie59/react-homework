import React, { Component } from 'react';
import './SunMoon.css'

export default class SunMoon extends Component {
  constructor (){
    super ();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className='center'>請仔細觀察太陽與月亮的位置，「必須」對準正中央
          <button onClick={this.handleClick}>切換成 晚上</button>
        </div>
        <img src="https://img.icons8.com/cotton/256/000000/sun--v1.png" alt=" sum"/>
        <img src="https://img.icons8.com/cotton/256/000000/moon-satellite.png" alt="moon"/>
      </div>
    )
  }
}

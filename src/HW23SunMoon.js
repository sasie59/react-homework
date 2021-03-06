import React,{ useState } from 'react';
import './HW23SunMoon.scss';


export default function HW23SunMoon() {
  const[isMorning, setIsMorning ] = useState(!0);

  const handleClick = () => {
    setIsMorning(!isMorning);
  };
  return (
    <div className={'sky ' + (isMorning ? 'morn' : 'night')}>
      <div>請仔細觀察太陽與月亮的位置，「必須」對準正中央
        <button data-testid='btn' onClick={handleClick}>切換成 {isMorning ? '晚上' : '早上'}</button>
      </div>
      <img className={'img ' + (isMorning ? 'middle' : 'top')} src="https://img.icons8.com/cotton/256/000000/sun--v1.png" alt="sum"/>
      <img className={'img ' + (isMorning ? 'bottom' : 'middle')} src="https://img.icons8.com/cotton/256/000000/moon-satellite.png" alt="moon"/>
    </div>
  );
}

// import React, { Component } from 'react';
// import './HW23SunMoon.scss';

// export default class HW23SunMoon extends Component {
//   constructor (){
//     super ();
//     this.state = {
//       isMorning : true,
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       isMorning : !this.state.isMorning
//     });
//   }

//   render() {
//     const {isMorning} = this.state;
//     return (
//       <div className={'sky ' + (isMorning ? 'morn' : 'night')}>
//         <div>請仔細觀察太陽與月亮的位置，「必須」對準正中央
//           <button onClick={this.handleClick}>切換成 {isMorning ? '晚上' : '早上'}</button>
//         </div>
//         <img className={'img ' + (isMorning ? 'middle' : 'top')} src="https://img.icons8.com/cotton/256/000000/sun--v1.png" alt="sum"/>
//         <img className={'img ' + (isMorning ? 'bottom' : 'middle')} src="https://img.icons8.com/cotton/256/000000/moon-satellite.png" alt="moon"/>
//       </div>
//     );
//   }
// }

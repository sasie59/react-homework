// import React, { useState, useEffect } from "react";

// export const date20220101 = +new Date("2022/01/01 00:00:00");
// export const ONE_HOUR = 60 * 60;
// export const ONE_DAY = ONE_HOUR * 24;
// export const countDownTime = date20220101 - (+new Date());
// export default function HW9HappyNewYear() {

//   const [time, setTime] = useState({
//     date: +new Date(),
//     countDown: Math.floor((date20220101 - (+new Date())) / 1000),
//   });
  
//   const day = Math.floor(time.countDown / ONE_DAY);
//   const hour = Math.floor((time.countDown % ONE_DAY) / ONE_HOUR);
//   const min = Math.floor((time.countDown % ONE_HOUR) / 60);
//   const sec = time.countDown % 60;
  
//   const tick = () => {
//     setTime({
//       countDown : Math.floor((date20220101 - (+new Date())) / 1000),
//     });
//   };
  
//   useEffect(() => {
//     setInterval(() => {
//       tick();
//     }, 1000);
//   }, []);
  
//   return (
//     <div>
//       <h1>HW9HappyNewYear</h1>
//       <h1 data-testid='countDown'>
//         距離2022跨年還有 : {day}天 {hour}時 {min}分 {sec}秒
//       </h1>
//     </div>
//   );
// }
import React,{useState, useEffect} from 'react';
const date20230101 = +new Date('2023/01/01 00:00:00');
export const countDownTime = date20230101 - (+new Date());

export default function HW9HappyNewYear() {

  const [time, setTime] = useState({
    date : +new Date(),
    conutDown : ~~(date20230101 - (+new Date()) / 1000),
  });

  const tick = () => {
    setTime({
      countDown : Math.floor((date20230101 - (+new Date())) / 1000),
    });
  };

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  }, []);

  const sec =  time.countDown % 60;
  const min =  ~~(time.countDown / 60) % 60;
  const hour = ~~(time.countDown / 60 / 60) % 24;
  const day =  ~~(time.countDown / 60 / 60 / 24);

  
  return (
    <div>
      <h1>HW9HappyNewYear</h1>
      <h1 data-testid='countDown'>
      距離2023跨年還有 : {day}天 {hour}時 {min}分 {sec}秒
      </h1>
    </div>
  );
}

// import React, { Component } from 'react';
// const date20220101 = +new Date('2022/01/01 00:00:00');

// export default class HW9HappyNewYear extends Component {
//   constructor(){
//     super();
//     this.state = ({
//       countDown: 0,
//       date: +new Date()
//     });
//   }
//   tick = () => {
//     this.setState({
//       date: +new Date(),
//       countDown: ~~((date20220101 - this.state.date) / 1000)
//     });
//   }
//   componentDidMount() {
//     setInterval(this.tick, 1000);
//   }
  
//   render() {
//     const{countDown} = this.state;
//     const sec =  countDown % 60;
//     const min =  ~~(countDown / 60) % 60;
//     const hour = ~~(countDown / 60 / 60) % 24;
//     const day =  ~~(countDown / 60 / 60 / 24);
//     return (
//       <div>
//         <h1 data-testid='countDown'>離2022跨年還有{day}天{hour}時{min}分{sec}秒: </h1>
//       </div>
//     );
//   }
// }
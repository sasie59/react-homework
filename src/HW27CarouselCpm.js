import React,{useState,useEffect} from 'react';
import "./HW27Carousel.scss";
export default function HW27CarouselCpm(props) {
  const [itemList, setItemList ] = useState(props.children);
  const [isMoving, setIsMoving] = useState(false);
  
  useEffect(() => {
    const {time} = props;
    setInterval(() => {
      setTimeout(() => {
        setItemList(itemList.slice(1).concat(itemList[0]));
        setIsMoving(isMoving);
      },time / 3);
      setIsMoving(!isMoving);
    },time);
  }, [isMoving, itemList, props] ); 


  return (
    <div>
      <div className="carousel">
        <div className={`item ${isMoving ? "hide " : ""}`}>{itemList[0]}</div>
        <div className={`item ${isMoving ? "show " : ""}`}>{itemList[1]}</div>
      </div>
    </div>
  );
}

// import React, { Component } from "react";
// import "./HW27Carousel.scss";
// export default class HW27CarouselCpm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemList: props.children
//     };
//   }

// componentDidMount() {
//   setInterval(() => {
//     setTimeout(() => {
//       const { itemList } = this.state;
//       this.setState({
//         itemList: itemList.slice(1).concat(itemList[0]),
//         isMoving: false
//       });
//     }, 500);
//     this.setState({
//       isMoving: true
//     });
//   }, 1500);
// }

//   render() {
//     const { itemList, isMoving } = this.state;
//     return (
//       <div className="carousel">
//         <div className={`item ${isMoving ? "hide " : ""}`}>{itemList[0]}</div>
//         <div className={`item ${isMoving ? "show " : ""}`}>{itemList[1]}</div>
//       </div>
//     );
//   }
// }
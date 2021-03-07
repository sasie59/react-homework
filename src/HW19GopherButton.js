import React, { useState, useEffect } from "react";
import "./HW19Gopher.scss";

export default function HW19GopherButton(props) {
  const [isG, setIsG] = useState(!~~(Math.random() * 2));

  const handleClick = () => {
    props.changeCount(isG ? 1 : -1);
    setIsG(!isG);
  };

  useEffect(() => {
    const tick = setInterval(() => {
      setIsG(isG => !isG);
    }, ~~(Math.random() * 2000) +2000);
    return () => {
      clearTimeout(tick);
    };
  },[]);

  return (
    <span>
      <button className="GopherButton" onClick={handleClick}>
        <h1>{isG ? "G" : "-"}</h1>
      </button>
    </span>
  );
}

// import React, { Component } from "react";
// import "./HW19Gopher.scss";

// export default class HW19GopherButton extends Component {
//   constructor() {
//     super();
//     this.state = {
//       mouse: !Math.floor(Math.random() * 2),
//     };
//   }
//   componentDidMount() {
//     this.tick();
//   }

//   tick = () => {
//     setTimeout(() => {
//       this.changeNum();
//       this.tick();
//     }, Math.floor(Math.random() * 2000) + 2000);
//   };

//   changeNum = () => {
//     this.setState({
//       mouse: !this.state.mouse,
//     });
//   };

//   handleClick = () => {
//     this.props.changeCount(this.state.mouse ? 1 : -1);
//     this.setState({
//       mouse: false,
//     });
//   };

//   render() {
//     return (
//       <button className="GopherButton" onClick={this.handleClick}>
//         <h1>{this.state.mouse ? "G" : "-"}</h1>
//       </button>
//     );
//   }
// }

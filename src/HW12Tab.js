// import React, { useState } from "react";

// const arr = ["lorem 1", "lorem 2", "lorem 3", "lorem 4", "lorem 5"];

// export default function HW12Tab() {
//   const [index, setIndex] = useState(0);

//   const handleClick = (index) => {
//     setIndex(index);
//   };

//   return (
//     <div>
//       <h1>HW12Tab</h1>
//       <h1>標籤</h1>
//       {["tab1", "tab2", "tab3", "tab4", "tab5"].map((item, index) => (
//         <div
//           key={index}
//           data-testid={index}
//           onClick={handleClick.bind(this, index)}
//           style={{
//             display: "inline-block",
//             width: "50px",
//             height: "25px",
//             border: "1px solid black",
//           }}>{item}
//         </div>
//       ))}<br />
//       {arr[index]}
//     </div>
//   );
// }
import React, { useState } from 'react';
const arr = ["lorem 1", "lorem 2", "lorem 3", "lorem 4", "lorem 5"];
export default function HW12Tab() {
  const [index, setIndex] = useState(0);

  const handleClick = (index) => {
    setIndex(index);
  };
  return (
    <div>
      <h1>HW12Tab</h1>
      <h1>標籤</h1>
      <h2>請試著點擊</h2>
      {["tab1", "tab2", "tab3", "tab4", "tab5"].map((item, index) =>
        <div
          data-testid={index}
          key={index}
          style={{
            display: 'inline-block',
            width: '50px',
            height: '25px',
            border: '1px solid black',
            borderRadius: '10px',
            margin: '2px',
            backgroundColor: 'rgb(100, 100, 255)'
          }}
          onClick={handleClick.bind(this, index)}
        >
          {item}
        </div>
      )}<br />
      {arr[index]}
    </div>
  );
}

// import React, { Component } from 'react';
// const arr = ["lorem 1", "lorem 2", "lorem 3", "lorem 4", "lorem 5"];
// export default class HW12Tab extends Component {
//   constructor() {
//     super();
//     this.state = {
//       index: 0
//     };
//   }

//   handleClick = (index) => {
//     this.setState({
//       index
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>HW12Tab</h1>
//         <h1>標籤</h1>
//         <h2>請試著點擊</h2>
//         {["tab1", "tab2", "tab3", "tab4", "tab5"].map((item, index) =>
//           <div
//             data-testid={index}
//             key={index}
//             style={{
//               display: 'inline-block',
//               width: '50px',
//               height: '25px',
//               border: '1px solid black',
//               borderRadius: '10px',
//               margin: '2px',
//               backgroundColor: 'rgb(100, 100, 255)'
//             }}
//             onClick={this.handleClick.bind(this, index)}
//           >
//             {item}
//           </div>
//         )}<br />
//         {arr[this.state.index]}
//       </div>

//     );
//   }
// }

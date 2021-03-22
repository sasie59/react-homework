import React, { useState } from "react";

import "./HW22Cart.scss";
import Fruit from "./HW22CartFruit";

const fruitObj = {
  apple: { name: "蘋果", price: 20 },
  orange: { name: "橘子", price: 25 },
  waxApple: { name: "蓮霧", price: 60 },
  grapeFruit: { name: "葡萄柚", price: 75 },
  cantaloupe: { name: "哈蜜瓜", price: 100 },
};
export default function HW22Cart() {
  const [state, setState] = useState({
    value: 0,
    sum: 0,
  });
  const [count, setCount] = useState({
    apple: 0,
    orange: 0,
    waxApple: 0,
    grapeFruit: 0,
    cantaloupe: 0,
  });

  const handleChange = ({ target }) => {
    setCount(target.value);
  };

  const handleSubmit = (fruitName, value) => {
    const money = fruitObj[fruitName].price * value;
    // console.warn(money);
    count[fruitName] += value;
    setState({
      sum: state.sum + money,
      value: 0,
    });
  };

  const handleLess = (fruitName) => {
    count[fruitName] -= 1;
    setState({
      value: 0,
      sum: state.sum - fruitObj[fruitName].price * 1
    });
  };
  const handleClear = (fruitName) => {
    setState({
      value: 0,
      sum: state.sum - fruitObj[fruitName].price * count[fruitName]
    });
    count[fruitName] = 0;
  };

  return (
    <div>
      {Object.keys(fruitObj).map((fruitName) => (
        <Fruit
          value={state.value}
          count={state.count}
          fruitName={fruitName}
          onSubmit={handleSubmit}
          onChange={handleChange}
          key={fruitObj[fruitName].name}
          name={fruitObj[fruitName].name}
          price={fruitObj[fruitName].price}
        />
      ))}
      <ul>
        {/* .filter((fruitName) => {
          return count[fruitName] > 0;
        }) */}
        {Object.keys(fruitObj).filter(fruitName =>{
          return count[fruitName] > 0;
        }).map((fruitName) => 
          <li key={fruitObj[fruitName].name} data-testid={`${fruitObj[fruitName].name}`}>
            {fruitObj[fruitName].name} * {count[fruitName]} =
            {fruitObj[fruitName].price * count[fruitName]}
            <button data-testid={`less-${fruitObj[fruitName].name}`} onClick={handleLess.bind(this, fruitName)}>-1</button>
            <button data-testid={`clear-${fruitObj[fruitName].name}`} onClick={handleClear.bind(this, fruitName)}>clear</button>
          </li>
        )}
        {!!state.sum && (
          <>
            <li>========</li>
            <li data-testid='total'>總金額$ {state.sum}</li>
          </>
        )}
      </ul>
    </div>
  );
}

// import React, { Component } from 'react';
// import './HW22Cart.scss';
// import HW22CartFruit from './HW22CartFruit';

// const fruitObj = {
//   orange:     {name: '橘子',   price: 20},
//   waxApple:   {name: '蓮霧',   price: 30},
//   cantaloupe: {name: '哈蜜瓜', price: 40},
//   apple:      {name: '蘋果',   price: 50},
//   grapeFruit: {name: '葡萄柚', price: 15},
// };

// export default class HW22Cart extends Component {
//   constructor(){
//     super();
//     this.state = {
//       value : '',
//       sum : 0,
//       fruitCount: {
//         orange: 0,
//         waxApple: 0,
//         cantaloupe: 0,
//         apple: 0,
//         grapeFruit: 0
//       }
//     };
//   }

//   handleSubmit = (fruitName, value) => {
//     const money = fruitObj[fruitName].price * value;
//     const { fruitCount } = this.state;
//     fruitCount[fruitName] += value;
//     this.setState ({
//       value : '',
//       sum : this.state.sum + money,
//       fruitCount: fruitCount,
//     });
//   }

//   handleLess = (fruitName) => {
//     const { fruitCount, sum} = this.state;
//     fruitCount[fruitName] -= 1;
//     this.setState({
//       fruitCount :  fruitCount,
//       sum : sum - fruitObj[fruitName].price * 1
//     });
//   }

//   handleClear = (fruitName) => {
//     const {fruitCount, sum} = this.state;
//     this.setState({
//       sum : sum - fruitObj[fruitName].price * fruitCount[fruitName]
//     });
//     fruitCount[fruitName] = 0;
//     this.setState({
//       fruitCount : fruitCount
//     });
//   }

//   render() {
//     const {fruitCount} = this.state;
//     const itemList = Object.keys(fruitObj)
//       .filter(fruitName => {
//         return fruitCount[fruitName] > 0;
//       })
//       .map(fruitName =>(
//         <li key={fruitObj[fruitName].name}>
//           {fruitObj[fruitName].name} *
//           {fruitCount[fruitName]} =
//           {fruitObj[fruitName].price * fruitCount[fruitName]}
//           <button onClick={this.handleLess.bind(this,fruitName)}>-1</button>
//           <button onClick={this.handleClear.bind(this,fruitName)}>clear</button>
//         </li>
//       ));
//     return (
//       <div>

//         {Object.keys(fruitObj).map((fruitName) => (
//           <HW22CartFruit
//             count={this.state.fruitCount}
//             onSubmit={this.handleSubmit}
//             key={fruitObj[fruitName].name}
//             name={fruitObj[fruitName].name}
//             price={fruitObj[fruitName].price}
//             fruitName={fruitName}
//           />
//         ))}
//         {/* {true && <MyComp />}
//         {false && <MyComp />}
//         {isShow && <MyComp />} */}
//         <ul>
//           {itemList}
//           {
//             !!this.state.sum && <>
//               <li>========</li>
//               <li>${this.state.sum}</li>
//             </>
//           }
//         </ul>
//       </div>
//     );
//   }
// }

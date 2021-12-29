// import React ,{useState }from 'react';

// export default function HW10Currency() {

//   const [value, setValue] = useState(0);
//   const [currency, setCurrency] = useState('');

//   const handleChange = ({target}) => {
//     setValue(target.value);
//     setCurrency(target.name);
//   };

//   let twd = currency === 'twd' ? value : value * 30;
//   let usd = currency === 'usd' ? value : value / 30;

//   return (
//     <div>
//       <h1>HW10Currency</h1>
//       <h1>貨幣轉換</h1>
//         TWD<input 
//         type="text"
//         name='twd'
//         value={twd}
//         onChange={handleChange}
//       /><br/>
//         USD<input
//         type="text"
//         name='usd'
//         value={usd}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

import React, { Component } from 'react';

const check_C_Turn = (value, currencyType, returnType) => {
  const base = {
    twd: 30,
    usd: 1 / 30
  };
  return currencyType === returnType ? value : value * base[returnType];
};

export default class HW10Currency extends Component {
  constructor() {
    super();
    this.state = ({
      value: 0,
      currencyType: ''
    });
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      currencyType: e.target.name
    });
  }
  
  render() {
    const { value, currencyType } = this.state;
    let twd = check_C_Turn(value, currencyType, 'twd');
    let usd = check_C_Turn(value, currencyType, 'usd');
    
    return (
      <div>
        <h1>HW10Currency</h1>
        <h1>貨幣轉換</h1>
        <input
          type="text"
          name='twd'
          value={twd}
          onChange={this.handleChange}
        />TWD<br/>
        <input
          type="text" 
          name='usd'
          value={usd}
          onChange={this.handleChange}
        />USD
      </div>
    );
  }
}

// import React, { Component } from 'react';

// export default class HW10Currency extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value : 0,
//       currencyType : ''
//     };
//   }

//   handleChange = ({target}) => {
    
//     this.setState({
//       value : target.value,
//       currencyType : target.name
//     });
//   }
//   render() {
//     const {currencyType, value} = this.state;

//     let twd = currencyType === 'twd' ? value: value * 30;
//     let usd = currencyType === 'usd' ? value: value / 30;


//     // if(currencyType === "twd") {
//     //   twd = value;
//     //   usd = value / 30;
//     // } else if (currencyType === 'usd'){
//     //   usd = value;
//     //   twd = value * 30;
//     // }
//     return (
//       <div>
//         <input
//           value={twd}
//           type="text"
//           name="twd"
//           onChange={this.handleChange}  
//         />TWD
//         <br />
//         <input
//           value={usd}
//           type="text"
//           name="usd"
//           onChange={this.handleChange}
//         />USD
//       </div>
//     );
//   }
// }

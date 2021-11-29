// import React,{ useState } from 'react';

// export default function HW8SumForButton() {

//   const [ sum, setSum ] = useState(0);

//   return (
//     <div>
//       <h1>HW8SumForButton</h1>
//       {[1,2,3,4,5,6,7,8,9].map((value,index) => 
//         <button
//           data-testid={index}
//           key={index}
//           onClick={() => setSum(sum + value)}
//         >{value}</button>
//       )}
//       <div name='sum'>加總值 : {sum}</div>
//     </div>
//   );
// }

import React, { Component } from 'react';

export default class HW8SumForButton extends Component {
  constructor(){
    super();
    this.state = ({
      sum : 0
    });
  }

  handleClick = (value) => {
    this.setState({
      sum : this.state.sum + value
    });
  }
  render() {
    return (
      <div>
        <h1>HW8SumForButton</h1>
        {[1,2,3,4,5,6,7,8,9].map(item => 
          <button onClick={this.handleClick.bind(this,item)}>
            {item}
          </button>
        )}
        <h2>加總值 : {this.state.sum}</h2>
      </div>
    );
  }
}



import React,{ useState } from 'react';

export default function HW8SumForButton() {

  const [ sum, setSum ] = useState(0);

  return (
    <div>
      <h1>HW8SumForButton</h1>
      {[1,2,3,4,5,6,7,8,9].map(value => 
        <button
          key={value}
          onClick={() => setSum(sum + value)}
        >{value}</button>
      )}
      <div>加總值 : {sum}</div>
    </div>
  );
}


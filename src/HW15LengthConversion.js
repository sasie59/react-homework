import React, { useState, useRef } from "react";
import LengthInput from "./HW15LengthInput";

const proportion = {
  mm: 1,
  cm: 10,
  m: 1000,
  km: 1000000,
};

const unitConverter = (number, oriUnit, toUnit) => {
  if (!oriUnit) return 0;
  /**
   * 1000000 km -> 6
   * 100000 m -> 5
   * 1000 cm -> 3
   * 1 -> 0
   */
  const mm = number * proportion[oriUnit];
  return mm / proportion[toUnit];
};

export default function HW15LengthConversion() {
  const [value ,setValue ] = useState(0);
  const [lengthType , setLengthType ] = useState('');
  const [id , setId ] = useState(1);

  const mm = unitConverter(value, lengthType, "mm");
  const cm = unitConverter(value, lengthType, "cm");
  const m = unitConverter(value, lengthType, "m");
  const km = unitConverter(value, lengthType, "km");

  const handleChange = ({target}) => {
    setValue(target.value);
    setLengthType(target.name);
    setId(target.id);
  };

  return (
    <div>
      <h1>長度轉換</h1>
      <form>
        <LengthInput
          id={1}
          value={mm}
          lengthType="mm"
          onChange={handleChange}
        />
        <LengthInput
          id={2}
          value={cm}
          lengthType="cm"
          onChange={handleChange}
        />
        <LengthInput
          id={3}
          value={m}
          lengthType="m"
          onChange={handleChange}
        />
        <LengthInput
          id={4}
          value={km}
          lengthType="km"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

// import React, { Component } from "react";
// import LengthInput from "./HW15LengthInput";
// /**
//  * 我提供另一種作法 你看看
//  */
// const proportion = {
//   mm: 1,
//   cm: 10,
//   m: 1000,
//   km: 1000000,
// };

// const unitConverter = (number, oriUnit, toUnit) => {
//   if (!oriUnit) return 0;
//   /**
//    * 1000000 km -> 6
//    * 100000 m -> 5
//    * 1000 cm -> 3
//    * 1 -> 0
//    */
//   const mm = number * proportion[oriUnit];
//   return mm / proportion[toUnit];
// };

// export default class HW15LengthConversion extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: 0,
//       lengthType: "",
//       id: 1,
//       // 我這邊先給1 反正0*任何數都是0 介面上不影響
//     };
//   }
//   handleChange = ({ target }) => {
//     this.setState({
//       value: target.value,
//       lengthType: target.name,
//       id: +target.id, // ← target.id 是字串
//     });
//     console.warn(target.id);
//   };
//   render() {
//     const { value, lengthType } = this.state;

//     const mm = unitConverter(value, lengthType, "mm");
//     const cm = unitConverter(value, lengthType, "cm");
//     const m = unitConverter(value, lengthType, "m");
//     const km = unitConverter(value, lengthType, "km");

//     return (
//       <div>
//         <h1>長度轉換</h1>
//         <form>
//           <LengthInput
//             id={1}
//             value={mm}
//             lengthType="mm"
//             onChange={this.handleChange}
//           />
//           <LengthInput
//             id={2}
//             value={cm}
//             lengthType="cm"
//             onChange={this.handleChange}
//           />
//           <LengthInput
//             id={3}
//             value={m}
//             lengthType="m"
//             onChange={this.handleChange}
//           />
//           <LengthInput
//             id={4}
//             value={km}
//             lengthType="km"
//             onChange={this.handleChange}
//           />
//         </form>
//       </div>
//     );
//   }
// }

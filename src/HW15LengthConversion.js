

/**
 * 你本來的寫法
 */
// const turnLength = (value, lengthType, returntype, id) => {
// console.warn(returntype);

/**
   * 因為你的 base 原本是定義在 if () {....} 裡面，所以只在 if 裡面有效
   * 而你在 return 那邊也有使用 base（不在if裡) 所以會有錯誤。
   * 因此，我稍微改寫了一下，把base在最上面用 let 定義，然後在 if 裡再賦予內容。 :)
   */
// let base;

// 你的 id 是字串，所以這邊全部的 if 都不會成立
// if(id == 1) {
//   base = {
//     mm : 1,
//     cm : 1 / 10,
//     m : 1 / 1000,
//     km :1 / 1000000
//   };
// } else if(id == 2) {
//   base = {
//     mm : 10,
//     cm : 1,
//     m : 1 / 100,
//     km : 1 / 100000
//   };
// }else if(id == 3) {
//   base = {
//     mm : 1000,
//     cm : 100,
//     m : 1,
//     km : 1 / 1000
//   };
// }else if(id == 4) {
//   base = {
//     mm : 1000000,
//     cm : 100000,
//     m : 1000,
//     km : 1
//   };
// }
/**
   * 12/05 提示：
   * 情境1： value = 1，lengthType = 'mm'
   * 
   * 你的寫法：
   * turnLength(1, "mm"","mm", 1)  -> 乘以 1
   * turnLength(1, "mm"","cm"", 2) -> 乘以 1
   * turnLength(1, "mm"","m"", 3) ->  乘以 1
   * turnLength(1, "mm"","km"", 4) -> 乘以 1
   * 
   * 換個寫法
   * turnLength(1, "mm"","mm", 1)  -> 乘以 1
   * turnLength(1, "mm"","cm"", 1) -> 乘以 1 / 10
   * turnLength(1, "mm"","m"", 1) ->  乘以 1 / 1000
   * turnLength(1, "mm"","km"", 1) -> 乘以 1 / 1000000
   * 
   * 有注意到嗎？ 當你的 lengthType 是 mm 時， id 應該都給 1 才對
   * 換個單位輸入試試：
   * turnLength(1, "km"","mm", 4)  -> 乘以 1000000
   * turnLength(1, "km"","cm"", 4) -> 乘以 100000
   * turnLength(1, "km"","m"", 4) ->  乘以 1000
   * turnLength(1, "km"","km"", 4) -> 乘以 1
   */
// id要都一樣 不能寫死 於是我設了state變數 但returntype是唯一不會變的東西
// 在下面的function 我也給了參數 印出來也會列出每一筆 但只要一敲鍵盤 依舊報錯

// console.warn(id, base);
  
// return lengthType === returntype ? value : value * base[returntype]; 
// };
/**
 * 你本來的寫法
 */
// let mm = turnLength(value, lengthType,"mm",id );
// let cm = turnLength(value, lengthType,"cm",id );
// let m = turnLength(value, lengthType,"m",id );
// let km = turnLength(value, lengthType,"km",id );
import React, { Component } from 'react';
import LengthInput from './HW15LengthInput';
/**
 * 我提供另一種作法 你看看
 */
const proportion = {
  'mm':       1,
  'cm':      10,
  'm':     1000,
  'km': 1000000,
};

const unitConverter = (number, oriUnit, toUnit) => {
  if(!oriUnit) return 0;
  /**
   * 1000000 km -> 6
 * 100000 m -> 5
 * 1000 cm -> 3
 * 1 -> 0
 */
  const mm = number * proportion[oriUnit];
  return mm / proportion[toUnit];
};

export default class HW15LengthConversion extends Component {
  constructor(){
    super();
    this.state = {
      value : 0,
      lengthType : '',
      id : 1
      // 我這邊先給1 反正0*任何數都是0 介面上不影響
    };
  }
  handleChange = ({target}) => {
    this.setState({
      value : target.value,
      lengthType :target.name,
      id : +target.id  // ← target.id 是字串
    });
    console.warn(target.id);
  }
  render() {
    const {value,lengthType} = this.state;
    
    const mm = unitConverter(value, lengthType, 'mm');
    const cm = unitConverter(value, lengthType, 'cm');
    const m = unitConverter(value, lengthType, 'm');
    const km = unitConverter(value, lengthType, 'km');

    return ( 
      <div>
        <h1>長度轉換</h1>
        <form>
          <LengthInput
            id={1} 
            value={mm}
            lengthType="mm"
            onChange={this.handleChange}/>
          <LengthInput
            id={2}
            value={cm}
            lengthType="cm"
            onChange={this.handleChange}/>
          <LengthInput
            id={3}
            value={m}
            lengthType="m"
            onChange={this.handleChange}/>
          <LengthInput
            id={4}
            value={km}
            lengthType="km"
            onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

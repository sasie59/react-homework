import React, { Component } from 'react';
import LengthInput from './LengthInput';

const turnLength = (value, lengthType, returntype, id) => {
  /**
   * 因為你的 base 原本是定義在 if () {....} 裡面，所以只在 if 裡面有效
   * 而你在 return 那邊也有使用 base（不在if裡) 所以會有錯誤。
   * 因此，我稍微改寫了一下，把base在最上面用 let 定義，然後在 if 裡再賦予內容。 :)
   */
  let base;

  /**
   * 提示：你想一個情況，如果你現在在 mm 輸入 1
   * 即代表你在 render 那邊會執行：
   * let mm = turnLength(1, "mm"","mm", 1);
   * let cm = turnLength(1, "mm","cm", 2);
   * let m  = turnLength(1, "mm","m", 3);
   * let km = turnLength(1, "mm","km", 4);
   * 
   * 而 let mm = turnLength(1, "mm"","mm", 1); 會得到 1
   * 但 let cm = turnLength(1, "mm","cm", 2); 也得到 1，但不對，應該得到 0.1
   * 但 let m =  turnLength(1, "mm","cm", 2); 也得到 1，但不對，應該得到 000.1
   * 但 let km = turnLength(1, "mm","cm", 2); 也得到 1，但不對，應該得到 000000.1
   * 
   * 但很接近答案了，再加加油。
   */
  if(id === 1) {
    base = {
      mm : 1,
      cm : 1 / 10,
      m : 1 / 1000,
      km :1 / 1000000
    }
  } else if(id === 2) {
    base = {
      mm : 10,
      cm : 1,
      m : 1 / 100,
      km : 1 / 100000
    }
  }else if(id === 3) {
    base = {
      mm : 1000,
      cm : 100,
      m : 1,
      km : 1 / 1000
    }
  }else if(id === 4) {
    base = {
      mm : 1000000,
      cm : 100000,
      m : 1000,
      km : 1
    }
  }
  return lengthType === returntype ? value : value * base[returntype] 
}

export default class LengthConversion extends Component {
  constructor(){
    super()
    this.state = {
      value : 0,
      lengthType : ''
    }
  }
  handleChange = ({target}) => {
    this.setState({
      value : target.value,
      lengthType :target.name
    })
  }
  render() {
    const {value,lengthType} = this.state;
    let mm = turnLength(value, lengthType,"mm", 1);
    let cm = turnLength(value, lengthType,"cm", 2);
    let m = turnLength(value, lengthType,"m", 3);
    let km = turnLength(value, lengthType,"km", 4);
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
    )
  }
}

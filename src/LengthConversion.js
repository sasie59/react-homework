import React, { Component } from 'react';
import LengthInput from './LengthInput';

const turnLength = (value, lengthType, returntype, id) => {
  /**
   * 因為你的 base 原本是定義在 if () {....} 裡面，所以只在 if 裡面有效
   * 而你在 return 那邊也有使用 base（不在if裡) 所以會有錯誤。
   * 因此，我稍微改寫了一下，把base在最上面用 let 定義，然後在 if 裡再賦予內容。 :)
   */
  let base;

  if(id === 1) {
    base = {
      mm : 1,
      cm : 1 / 10,
      m : 1 / 1000,
      km :1 / 1000000
    }
    // console.warn(base['mm']);
    // console.warn(base['cm']);
    // console.warn(base['m']);
    // console.warn(base['km']);
    // 在這邊驗証 結果是正確的
    
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
  // console.warn(lengthType === returntype);
  // test完 true跟false出現的結果是正確的
  // console.warn(value * base[returntype]);
  // 但在這邊印出  但經過id判別後 value相對應的結果不如預期 結果永遠等於1 代表上面的寫法有誤?

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
  
  return  lengthType === returntype ? value : value * base[returntype] 
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

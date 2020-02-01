import React, { Component } from 'react';
import Modal1 from './Modal1'
import  './Modal.css';

export default class Modal extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  handleClick = () => {
    // modal跟alert的差別?
    /**
     * modal 與 alert 廣義來說沒有什麼不一樣
     * 都屬「強制讓對方看到訊息的視窗」
     * 但狹義來說：
     * alert 是 javascript 內建的語法，而且也只能塞文字訊息。按鈕也只有一個確定
     * 而且 alert 的外觀還會隨著瀏覽器的不同而改變：https://lh3.googleusercontent.com/-iNyZIAF6Rxk/VcXzKftlF_I/AAAAAAAALTE/EslDOrCHYgQ/s608-Ic42/Screenshot_2015-08-08-20-06-44.jpg
     * 
     * modal 則比較像是情境式的視窗，能塞的不只是文字、圖片、甚至影片也可以。
     * 因為這麼複雜，所以通常 modal 都是工程師自己做的。但大多網站比較常用 modal。
     * 而且 modal 在不同瀏覽器下具有「高度相似」的外觀。
     */
  }

  render() {
    const buttonArr = ['modal', 'top', 'header', 'top + animation'].map((item, index) => {
      return <button onClick={this.handleClick} className='button' key={index}>{item}</button>
    })
    return (
      <div>
        {buttonArr}
      </div>
    )
  }
}

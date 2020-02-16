import React from 'react';
import  './Modal.css';

export default function Modal1(props) {
  return (
    <div>
      {props.children}<br/>
      <button>關閉</button>
    </div>
  )
}

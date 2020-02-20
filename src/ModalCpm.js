import React from 'react';
import  './Modal.css';

export default function ModalCpm(props) {
  return (
    <div>
      {props.children}<br/>
      <button onClick={props.onClick}>關閉</button>
    </div>
  )
}

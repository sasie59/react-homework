import React from 'react';
import  './Modal.css';

export default function ModalCpm(props) {
  // props.isTop ?
  return (
    <div className={props.isModal? 'modal-content' : ''}>
      {props.header && <h2>{props.header}</h2>}
      {props.children}<br/>
      <button onClick={props.onClick}>關閉</button>
    </div>
  )
}


function AComp() {
  let value = 8;
  return (
    <div>
      <CComp value={value} />
    </div>
  );
}

// function BComp(props) {
//   return (
//     <CComp value={props.value + 1} />
//   );
// }

function CComp(props) {
  return (
    <div>{props.value + 3}</div>
  );
}
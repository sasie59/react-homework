import React from 'react';
import  './Modal.css';

export default function ModalCpm(props) {

  const handleClick = (e) => {
    if(
      e.target === document.getElementById('modal-bg') ||
      e.target === document.getElementById('button')
    ) {
      props.onClick();
    }
    
  }
  
  let modalClass = "modal-content";
  if(props.isTop) modalClass += " top";
  if(props.isAnimation) modalClass += " animation";

  return (
    <div className="modal-bg" onClick={handleClick} id="modal-bg">
      <div className={modalClass}>
        {props.header && <h2>{props.header}</h2>}
        {props.children}<br/>
        <button id="button" onClick={handleClick}>關閉</button>
      </div>
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
import React, { useState } from "react";
import "./HW25Modal.scss";

export default function HW25ModalCpm(props) {
  const [modalClass, setModalClass] = useState("modal-content");
  const [result, setResult] = useState('');
  
  const handleClick = (e) => {
  //   const result = (props.isTop) ? setResult('top') : (props.isAnimation) ? setResult('animation'): 
  //     setModalClass(`${modalClass} ${result}`);
    // 想到的寫法
    if (
      e.target === document.getElementById("modal-bg") ||
      e.target === document.getElementById("button")
    ) {
      props.onClick();
    }
  };
    
  return (
    <div className="modal-bg" onClick={handleClick} id="modal-bg">
      <div className={`${modalClass} ${result}`}>
        {props.header && <h2>{props.header}</h2>}
        {props.children}
        <br />
        <button id="button" onClick={handleClick}>
          關閉
        </button>
      </div>
    </div>
  );
}

// import React from 'react';
// import  './HW25Modal.scss';

// export default function HW25ModalCpm(props) {

//   const handleClick = (e) => {
//     if(
//       e.target === document.getElementById('modal-bg') ||
//       e.target === document.getElementById('button')
//     ) {
//       props.onClick();
//     }

//   };

//   let modalClass = "modal-content";
//   if(props.isTop) modalClass += " top";
//   if(props.isAnimation) modalClass += " animation";

//   return (
//     <div className="modal-bg" onClick={handleClick} id="modal-bg">
//       <div className={modalClass}>
//         {props.header && <h2>{props.header}</h2>}
//         {props.children}<br/>
//         <button id="button" onClick={handleClick}>關閉</button>
//       </div>
//     </div>
//   );
// }

// // function AComp() {
// //   let value = 8;
// //   return (
// //     <div>
// //       <CComp value={value} />
// //     </div>
// //   );
// // }

// //  function BComp(props) {
// //    return (
// //      <CComp value={props.value + 1} />
// //    );
// //  }

// //  function CComp(props) {
// //    return (
// //      <div>{props.value + 3}</div>
// //    );
// //  }

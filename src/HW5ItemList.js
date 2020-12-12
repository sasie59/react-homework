import React ,{useState }from 'react';

export default function HW5ItemList() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  
  return (
    <div>
      <h1>HW5ItemList</h1>
      <form onSubmit={(event)=> {
        event.preventDefault();
        setList([item, ...list]);
        setItem('');
      }}>
        <input
          type="text"
          value={item}
          onChange={({target}) =>setItem(target.value) }
        />
      </form>
      <ul>
        {list.map((item) =>
          <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  );
}

// import React from 'react';

// export default class HW5ItemList extends React.Component {
//   constructor(){
//     super();
//     this.state = ({
//       list : [],
//       value : ''
//     });
//   }

//   handleChange = (event)=> {
//     /**
//      * onChange 只是改變value而已吧
//      * 不應該更新 list
//      */
//     this.setState ({
//       value : event.target.value,
//     });
//   }
//   handleSubmit = (event) => {
//     const {list,value} = this.state;
//     event.preventDefault();
//     if(value !== '' && value.trim() !== '')
//     this.setState({
//       list : [value, ...list],
//       value : ''
//     });
//     /** 更新 list 的動作應該要在這裡做 */
//   }
//   render() {
//     // 先將map出來的東西放在return之前，之後再return標籤
//     const itemList = this.state.list.map((n,index) =>
//       <li key={index}>{n}</li>
//     );
//     return (
//       <div>
//         <h1>清單</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//           type="text"
//           name=""
//           id=""
//           value={this.state.value}
//           onChange={this.handleChange} />
//         </form>
//         <ul>
//           {itemList}
//         </ul>
//       </div>
//     );
//   }
// }
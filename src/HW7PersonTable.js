// // hooks
// import React, { useState, useEffect } from "react";

// export default function HW7PersonTable() {
//   const [list, setList] = useState([]);
  
//   const handleFetch = () => {
//     fetch("https://randomuser.me/api/?results=25")
//       .then((res) => res.json())
//       .then(({ results: list }) => {
//         setList(list);
//       });
//   };

//   useEffect(() => {
//     handleFetch();
//   }, []);

//   return (
//     <div>
//       <h1>複習React & Hooks & Jest</h1>
//       <button onClick={handleFetch}>抓取資料</button>
//       <table>
//         <thead>
//           <tr>
//             <th>照片</th>
//             <th>姓名</th>
//             <th>性別</th>
//             <th>電子郵件</th>
//             <th>年齡</th>
//             <th>手機</th>
//             <th>城市</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((item) => (
//             <tr key={item.login.uuid}>
//               <td>
//                 <img src={item.picture.medium} alt="" />
//               </td>
//               <td>{item.name.last}</td>
//               <td>{item.gender}</td>
//               <td>{item.email}</td>
//               <td>{item.dob.age}</td>
//               <td>{item.phone}</td>
//               <td>{item.location.country}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { Component } from 'react';

export default class HW7PersonTable extends Component {
  constructor(){
    super();
    this.state = ({
      list: []
    });
  }

  handleFetch = () => {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(json => this.setState({
        list: json.results
      }));
  }

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    return (
      <div>
        <h1>HW7PersonTable</h1>
        <button onClick={this.handleFetch}>抓資料</button>
        <table>
          <thead>
            <tr>
              <th>照片</th>
              <th>姓氏</th>
              <th>性別</th>
              <th>email</th>
              <th>年紀</th>
              <th>手機</th>
              <th>國家</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(item => 
              <tr key={item.login.uuid}>
                <td>
                  <img src={item.picture.medium} alt="" />
                </td>
                <td>{item.name.last}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.dob.age}</td>
                <td>{item.phone}</td>
                <td>{item.location.country}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

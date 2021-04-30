// import React, { useState, useEffect } from "react";

// export default function HW7PersonTable() {
//   const [list, setList] = useState([]);

//   const fetchData = () => {
//     fetch("https://randomuser.me/api/?results=25")
//       .then((res) => res.json())
//       .then(({ results: list }) => {
//         // console.warn(list);
//         setList(list);
//       });
//   };

//   const handleClick = () => {
//     fetchData();
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>HW7PersonTable</h1>
//       <button onClick={handleClick}>抓取資料 </button>
//       <table>
//         <thead>
//           <tr>
//             <th>picture</th>
//             <th>name</th>
//             <th>gender</th>
//             <th>email</th>
//             <th>age</th>
//             <th>phone</th>
//             <th>country</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map(item =>
//             <tr key={item.login.uuid}>
//               <td>
//                 <img src={item.picture.medium} alt=""/>
//               </td>
//               <td>{item.name.last}</td>
//               <td>{item.gender}</td>
//               <td>{item.email}</td>
//               <td>{item.dob.age}</td>
//               <td>{item.phone}</td>
//               <td>{item.location.country}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// hooks
import React, { useState, useEffect } from "react";

export default function HW7PersonTable() {
  const [list, setList] = useState([]);
  
  const handleFetch = () => {
    fetch("https://randomuser.me/api/?results=25")
      .then((res) => res.json())
      .then(({ results: list }) => {
        setList(list);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <h1>複習React & Hooks & Jest</h1>
      <button onClick={handleFetch}>抓取資料</button>
      <table>
        <thead>
          <tr>
            <th>照片</th>
            <th>姓名</th>
            <th>性別</th>
            <th>電子郵件</th>
            <th>年齡</th>
            <th>手機</th>
            <th>城市</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

// // import React from 'react';

// // export default class HW7PersonTable extends React.Component {
// //   constructor(){
// //     super();
// //     this.state = ({
// //       personList :[]
// //     });
// //   }

// // const handleFetch = () => {
// //   fetch('https://randomuser.me/api/?results=25')
// //     .then(function(res) {
// //       return res.json();
// //     })
// //     .then((json) => {
// //       this.setState({
// //         list: json.results
// //       });
// //     });
// // };
// //   componentDidMount() {
// //     this.handleFetch();
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h1>HW7PersonTable</h1>
// //         <button onClick={this.handleFetch}>抓取資料</button>

// /* <table>
//   <thead>
//     <tr>
//       <th>picture</th>
//       <th>name</th>
//       <th>gender</th>
//       <th>email</th>
//       <th>age</th>
//       <th>phone</th>
//       <th>country</th>
//     </tr>
//   </thead>
//   <tbody>
//     {this.state.personList.map(person =>{
//       return <HW7PersonalInfo
//         key={person.login.uuid}
//         picture={person.picture.thumbnail}
//         name={person.name.last}
//         gender={person.gender}
//         email={person.email}
//         age={person.dob.age}
//         phone={person.phone}
//         country={person.location.country}
//       />;
//     })}
//   </tbody>
// </table>; */

// //       </div>
// //     );
// //   }
// // }

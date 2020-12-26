import React, { useState, useEffect } from "react";
import HW7PersonalInfo from "./HW7PersonalInfo";

export default function HW7PersonTable() {
  const [list, setList] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=25")
      .then((res) => res.json())
      .then(({ results: list }) => {
        // console.warn(list);
        setList(list);
      });
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>HW7PersonTable</h1>
      <button onClick={handleClick}>抓取資料 </button>
      <table>
        <thead>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>gender</th>
            <th>email</th>
            <th>age</th>
            <th>phone</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <HW7PersonalInfo
              key={item.login.uuid}
              picture={item.picture.medium}
              name={item.name.last}
              gender={item.gender}
              email={item.email}
              age={item.dob.age}
              phone={item.phone}
              country={item.location.country}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// import React from 'react';

// export default class HW7PersonTable extends React.Component {
//   constructor(){
//     super();
//     this.state = ({
//       personList :[]
//     });
//   }

// const handleFetch = () => {
//   fetch('https://randomuser.me/api/?results=25')
//     .then(function(res) {
//       return res.json();
//     })
//     .then((json) => {
//       this.setState({
//         list: json.results
//       });
//     });
// };
//   componentDidMount() {
//     this.handleFetch();
//   }

//   render() {
//     return (
//       <div>
//         <h1>HW7PersonTable</h1>
//         <button onClick={this.handleFetch}>抓取資料</button>

/* <table>
  <thead>
    <tr>
      <th>picture</th>
      <th>name</th>
      <th>gender</th>
      <th>email</th>
      <th>age</th>
      <th>phone</th>
      <th>country</th>
    </tr>
  </thead>
  <tbody>
    {this.state.personList.map(person =>{
      return <HW7PersonalInfo
        key={person.login.uuid}
        picture={person.picture.thumbnail}
        name={person.name.last}
        gender={person.gender}
        email={person.email}
        age={person.dob.age}
        phone={person.phone}
        country={person.location.country}
      />;
    })}
  </tbody>
</table>; */

//       </div>
//     );
//   }
// }

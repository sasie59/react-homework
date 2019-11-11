import React from 'react'
import PersonalInfo from './PersonalInfo'

export default class PersonTable extends React.Component {
  constructor(){
    super()
    this.state = ({
      personList :[]
    });
  }

  componentDidMount() {
    this.handleFetch();
  }
  

  handleFetch = () => {
    fetch('https://randomuser.me/api/?results=25')
    .then(function(res) {
      return res.json()
    })
    .then((json) => {
      this.setState({
        personList: json.results
      });
    });
  }

  render() {
    return (
      <div>
        <h2>使用者表格</h2>
        <button onClick={this.handleFetch}>Update List</button>
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
            {this.state.personList.map(person =>{
              return <PersonalInfo
                key={person.login.uuid}
                picture={person.picture.thumbnail}
                name={person.name.last}
                gender={person.gender}
                email={person.email}
                age={person.dob.age}
                phone={person.phone}
                country={person.location.country}
              />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

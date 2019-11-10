import React from 'react'
import PersonalInfo from './PersonalInfo'

export default class PersonTable extends React.Component {
  constructor(){
    super()
    this.state = ({

    });
  }
  render() {
    return (
      <div>
        <h2>使用者表格</h2>
        <button onClick>Update List</button>
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
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
            <PersonalInfo />
          </tbody>
        </table>
      </div>
    )
  }
}

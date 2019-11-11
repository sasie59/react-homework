import React from 'react'

export default function PersonalInfo(props) {
  return (
    <tr>
    
      <td><img src={props.picture} alt=""/></td>
      <td>{props.name}</td>
      <td>{props.gender}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
      <td>{props.phone}</td>
      <td>{props.country}</td>
    </tr>
  )
}

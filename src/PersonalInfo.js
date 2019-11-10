import React from 'react'

export default function PersonalInfo(props) {
  return (
    <tr>
      <td>{props.picture}</td>
      <td>{props.name}</td>
      <td>{props.gender}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
      <td>{props.phone}</td>
      <td>{props.conutey}</td>
    </tr>
  )
}

import React from 'react'

export const User = (props) => {

  const { data } = props;

  return (
    <ul>
      <li>
        <p>{`name : ${data.name}`}</p>
        <p>{`nick name : ${data.username}`}</p>
        <p>{`phone : ${data.phone}`}</p>
        <p>{`email : ${data.email}`}</p>
        <p>{`website : ${data.website}`}</p>
      </li>
    </ul>
  )
}

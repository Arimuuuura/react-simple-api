import React from 'react'

export const Users = (props) => {
  // console.log(props);

  const { data, onClick} = props;

  return (
    <ul>
      {
        data.map(val => (
          <li key={val.id} onClick={onClick} id={val.id}>
            <h4>{`name : ${val.name}`}</h4>
          </li>
        ))
      }
    </ul>
  )
}

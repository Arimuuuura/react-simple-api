import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`

const List = styled.li`
  background-color: #fff;
  list-style: none;
  margin: 16px 0;
  padding: 16px;
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 0 4px 2px #ccc;
  & h3 {
    text-align: center;
    margin: 8px 0;
  }
  & p {
    margin: 12px 0;
  }
  & span {
    font-size: 18px;
  }
`

export const User = (props) => {

  const { data } = props;

  return (
    <Container>
      <ul>
        <List>
          <h3>{data.name}</h3>
          <p>nick name : <span>{data.username}</span></p>
          <p>phone : <span>{data.phone}</span></p>
          <p>email : <span>{data.email}</span></p>
          <p>website : <span>{data.website}</span></p>
        </List>
      </ul>
    </Container>
  )
}

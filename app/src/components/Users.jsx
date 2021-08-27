import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`

const Header = styled.h2`
  margin: 0 auto;
  text-align: center;
`

const List = styled.li`
  background-color: #fff;
  text-align: center;
  list-style: none;
  margin: 16px 0;
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 2px #ccc;
  &:hover {
    font-size: 18px;
    color: red;
    font-weight: bold;
  }
`

export const Users = (props) => {
  // console.log(props);

  const { data, onClick} = props;

  return (
    <Container>
      <ul>
        <Header>User Name List</Header>
        {
          data.map(val => (
            <List key={val.id} onClick={onClick} id={val.id}>
              <p>{`${val.name}`}</p>
            </List>
          ))
        }
      </ul>
    </Container>
  )
}

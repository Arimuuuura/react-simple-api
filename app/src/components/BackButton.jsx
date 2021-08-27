import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: end;
`

const Button = styled.button`
  background-color: tomato;
  width: 100px;
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 2px #333;
  font-size: 18px;
  color: #333;
`

export const BackButton = (props) => {

  const { onClick, children } = props;

  return (
    <Container>
      <Button onClick={onClick}>{ children }</Button>
    </Container>
  )
}

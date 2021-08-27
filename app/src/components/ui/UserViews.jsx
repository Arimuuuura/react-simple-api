import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Users } from '../Users';
import { User } from '../User';
import styled from 'styled-components';
import { BackButton } from '../BackButton';

const Container = styled.div`
  background-color: aqua;
  margin: 0;
  padding: 40px;
`

export const UserViews = (props) => {

  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [IsClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );

      setData(result.data);
    };

    fetchData();
  }, [id]);

  // console.log(data);

  const onClickKey = (e) => {
    setId(e.target.parentNode.id);
    setIsClicked(true);
  }

  const onClickBack = () => {
    setData([]);
    setId('');
    setIsClicked(false);
  }

  return (
    <Container>
      {
        IsClicked ? (
          <>
            <User data={data} />
            <BackButton onClick={onClickBack}>Back</BackButton>
          </>
        ) : (
          <Users data={data} onClick={onClickKey} />
        )
      }
    </Container>
  )
}

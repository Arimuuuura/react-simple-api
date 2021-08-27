import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Users } from '../Users';
import { User } from '../User';

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

  return (
    <>
      {
        IsClicked ? (
          <User data={data} />
        ) : (
          <Users data={data} onClick={onClickKey} />
        )
      }
    </>
  )
}

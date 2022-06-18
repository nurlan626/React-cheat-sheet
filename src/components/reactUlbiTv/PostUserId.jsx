import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostUserId = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  const fetch = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/1/comments`
      );
      setUser(response.data);
    } catch (e) {
    } finally {
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>{user.name}</div>
  )
}

export default PostUserId
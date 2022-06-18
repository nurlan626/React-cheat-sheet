import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostUserId = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  const fetch = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
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
    <>
      <div>User info</div>
      <div>
        {user && (
          <div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>website: {user.website}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostUserId;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>welcome {auth.user}</div>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default Profile;

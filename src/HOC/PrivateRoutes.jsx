import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/context/auth'

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const auth = useAuth();
    const navigate = useNavigate();

    if(!auth.user){
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
  return children
}

export default PrivateRoutes
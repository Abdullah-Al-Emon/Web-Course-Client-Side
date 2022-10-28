import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user , loading } = useContext(AuthContext)
    const loaction = useLocation();
    
    if(loading){
        return <span>Loading</span>
    }
    if(!user){
        return <Navigate
    }
};

export default PrivateRoute;
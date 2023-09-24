import React, { useContext } from 'react';
import { UserContext } from '../Context/AuthProvider';


const UseAuth = () => {
    return useContext(UserContext)
};

export default UseAuth;
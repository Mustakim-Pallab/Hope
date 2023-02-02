import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const UserContext = createContext();
const AuthProvider = ({children}) => {

const AllContext=useFirebase()
    return (
        <div>
            <UserContext.Provider value={AllContext}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthProvider;
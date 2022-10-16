import React, { createContext, useState } from "react";
 import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword} from 'firebase/auth';


import app from '../firebase/Config.config'

export const AuthContext = createContext();
const auth=getAuth(app);



 const UserContext = ({ children }) => {
 
    const [user,setUser]=useState({displayName:'Emon'});
    const createUser=(email,password)=>{
        return  createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {user,createUser,signIn};
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

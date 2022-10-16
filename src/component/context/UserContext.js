import React, { createContext, useEffect, useState } from "react";
 import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword,onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


import app from '../firebase/Config.config'

export const AuthContext = createContext();
const auth=getAuth(app);



 const UserContext = ({ children }) => {

 const googleProvider=new GoogleAuthProvider();
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        return  createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
 const signInWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider);


 }

    const logOut=()=>{
     return  signOut(auth);
    }
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
        console.log('auth state changed',currentUser)
    })
    return()=>{
        unsubscribe();
    }
},[])
    const authInfo = {loading,user,createUser,signIn,logOut,signInWithGoogle};
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

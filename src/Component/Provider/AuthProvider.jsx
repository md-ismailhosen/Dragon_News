import React, {  useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //console.log(loading, user);
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);


    };

    //update user
    const updateUser =(updateData)=>{
        return updateProfile(auth.currentUser, updateData);

    }


   
    const logOut = () =>{
        return signOut(auth);
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
    },[]);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
    };


    return(
        
            <AuthContext.Provider value={authData}>
                {children}
            </AuthContext.Provider>
        
    );
    
};

export default AuthProvider;
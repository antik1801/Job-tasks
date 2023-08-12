import React, { createContext, useEffect, useState } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config'


const auth = getAuth(app)
const googleProvier = new GoogleAuthProvider()
export const AuthContext = createContext()

function AuthProviders({children}) {
    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvier)
    }
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=>{
            return unsubscribe()
        }

    },[])

    const authInfo={
        user, loading, setLoading, createUser, signIn, googleSignIn, logout
    }
  return (<AuthContext.Provider value={authInfo}></AuthContext.Provider>)
}

export default AuthProviders

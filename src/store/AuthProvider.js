import React, { createContext, useEffect, useState } from 'react'
export const AuthContext=createContext({
    isLoggedin:false,
    token:null,
    logIn:(token)=>{},
    logOut:()=>{}
})
const AuthProvider = (props) => {
    const [token,setToken]=useState(null)
    const [loggedIn,setLoggedIn]=useState(false)
    useEffect(()=>{
        const authToken=localStorage.getItem("token")
        if(authToken!==null){
            setToken(JSON.parse(authToken))
            setLoggedIn(true)
            setTimeout(()=>{
                localStorage.removeItem('token')
            },1000*60*5)
        }
    },[])

    const logIn=(token)=>{
        setToken(token)
        setLoggedIn(true)
        localStorage.setItem("token",JSON.stringify(token))
        setLoggedIn(true)
            setTimeout(()=>{
                localStorage.removeItem('token')
            },1000*60*5)
    }
    const logOut=()=>{
        setToken(null)
        setLoggedIn(false)
        localStorage.removeItem("token")
    }
  return (
    <AuthContext.Provider value={{
        isLoggedin:loggedIn,
        token:token,
        logIn:logIn,
        logOut:logOut
    }}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider
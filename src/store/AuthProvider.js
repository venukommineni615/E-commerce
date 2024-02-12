import React, { createContext, useEffect, useState } from 'react'
export const AuthContext=createContext({
    isLoggedin:false,
    token:null,
    logIn:(token)=>{},
    logOut:()=>{},
    email:null
})
const AuthProvider = (props) => {
    const [email,setEmail]=useState(null)
    const [token,setToken]=useState(null)
    const [loggedIn,setLoggedIn]=useState(false)
    useEffect(()=>{
        const authToken=localStorage.getItem("token")
        if(authToken!==null){
            setToken(JSON.parse(authToken))
            setLoggedIn(true)
            setEmail(JSON.parse(localStorage.getItem('email')))
           
        }
    },[])

    const logIn=(token,useremail)=>{
        setToken(token)
        setLoggedIn(true)
        localStorage.setItem("token",JSON.stringify(token))
        console.log(useremail)
        let myemail=useremail.replace(/[@.]/g, '')
        
        localStorage.setItem("email",JSON.stringify(myemail))
        setLoggedIn(true)
        setEmail(myemail)
           
    }
    const logOut=()=>{
        setToken(null)
        setLoggedIn(false)
        setEmail(null)
        localStorage.removeItem("token")
        localStorage.removeItem("email")
    }
  return (
    <AuthContext.Provider value={{
        isLoggedin:loggedIn,
        token:token,
        logIn:logIn,
        logOut:logOut,
        email:email
    }}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider
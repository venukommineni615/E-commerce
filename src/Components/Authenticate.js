import React, { useContext } from 'react'
import { AuthContext } from '../store/AuthProvider'
import { Navigate } from 'react-router-dom'

const Authenticate = (props) => {
    const authCtx=useContext(AuthContext)
    console.log(authCtx)
    if(props.reverse){
        return !authCtx.isLoggedin?props.children:<Navigate to='/home'></Navigate>
    }else{
        if(authCtx.isLoggedin){
            return props.children
        }else{
            return <Navigate to='/home' replace/>
        }
    }
  
  
}

export default Authenticate
import React, { useContext } from 'react'
import { AuthContext } from '../store/AuthProvider'
import { Navigate } from 'react-router-dom'

const Authenticate = (props) => {
    const authCtx=useContext(AuthContext)
    
    if(props.reverse){
        return !authCtx.isLoggedin?props.children:<Navigate to='/store'></Navigate>
    }else{
        if(authCtx.isLoggedin){
            return props.children
        }else{
            return <Navigate to='/login' replace/>
        }
    }
  
  
}

export default Authenticate
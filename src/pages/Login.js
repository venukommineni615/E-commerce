import React, {useContext, useRef, useState} from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Components/Header';
import { AuthContext } from '../store/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const [isLoading,setIsLoading]=useState(false)
    const authCtx=useContext(AuthContext)
    const email=useRef()
    const password=useRef()
    const authHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
       
          try {
            const res = await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIXYEexOHeexcl7872yMM70nR1j7HYnhM",
              {
                method: "POST",
                body: JSON.stringify({
                  email: email.current.value,
                  password: password.current.value,
                  returnSecureToken: true,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            
            const data = await res.json();
            if(data.error){
              throw new Error(data.error.message)
            }
            else{
              authCtx.logIn(data.idToken,email.current.value)
              navigate('/store')
            }
          
          
          } catch (error) {
    
            alert(error);
          }
          setIsLoading(false);
        } 
    
  return (
    <>
    <Header></Header>
    <Form onSubmit={authHandler} className='bg-secondary mt-4 w-50 m-auto rounded p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className='text-white'>Email address</Form.Label>
        <Form.Control ref={email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Password</Form.Label>
        <Form.Control ref={password} type="password" placeholder="Password" />
      </Form.Group>
      {isLoading && <p className='text-white'>sending the request...</p>}
      {!isLoading && <Button variant="dark" type="submit">
        Login
      </Button>}
    </Form>
    </>
  );
}

export default Login;
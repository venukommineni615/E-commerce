import React, {useRef} from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Contact = () => {
    const email=useRef()
    const password=useRef()
    const number=useRef()
    const addContact=async(event)=>{
        event.preventDefault()
        let contact={
            email:email.current.value,
            number:number.current.value,
            password:password.current.value
        }
        const res= await fetch("https://contact-7d1c8-default-rtdb.firebaseio.com/contacts.json",
        {
            method:'POST',
            body:JSON.stringify(contact),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data=await res.json()
        console.log(data)
        email.current.value=''
        number.current.value=''
        password.current.value=''

    }
  return (
    <Container fluid className='p-0'>
  <Nav className='bg-dark p-3 m-0'>
    <h3 className='text-white'>Contact details</h3>
    <NavLink to='..' relative='path' className='text-center ms-auto text-decoration-none text-white bg-secondary p-2 border border-1 border-dark-subtle rounded'>Go back</NavLink>
  </Nav>
      <Form className='bg-dark-subtle w-50 mt-4 border rounded flex-column p-3 mx-auto' onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" ref={number} />
        </Form.Group>
        <Button variant="secondary" type="submit">
        Submit
      </Button>
  </Form>
  </Container>
  )
}

export default Contact
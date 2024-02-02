import React from 'react'
import Header from '../Components/Header'
import { Button, Container,Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
        <Header></Header>
        <Container fluid className='bg-secondary p-3 mx-0'>
            <Row className='text-center my-2 text-white'>
                <h1 className='fs-1 fw-bold'>The Generics</h1>
            </Row>
            <Row className='my-2'>
                <p className='w-auto mx-auto text-white border rounded p-2 border-2 border-white'>Get Your Latest Album</p>
            </Row>
            <Row className='my-2'>
                <Button variant='secondary' className='w-auto mx-auto text-white border-2 border-white'>Play</Button>
            </Row>
        </Container>
    </>
  )
}

export default Home
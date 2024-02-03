import React, { useContext } from 'react'
import {Card, Container, Row, Col, Button, Stack} from 'react-bootstrap'
import CartContext from '../store/CartContext'
import { NavLink } from 'react-router-dom'
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
const Albums = () => {
    const cartCtx=useContext(CartContext)
    const addItem=(item)=>{
        cartCtx.addItem({
            ...item,
        })
    }
  return (
    <>
    <Card xs={12} className='bg-secondary rounded-0'>
      
      <Card.Body className='mx-auto my-2 bg-secondary'>
        <Card.Title className=' fs-1 fw-bold text-white'>The Generics</Card.Title>
       
      </Card.Body>
    </Card>
    <Container fluid>
        <h2 className='my-3 text-center'>Music</h2>
        <Row className="justify-content-center align-items-center">
            {productsArr.map((item)=>{
                return<Col xs={6} key={item.title} className='mb-4 p-4'>
                    <Card className='mx-auto bg-transparent' style={{ width: '18rem' }}>
                    <Card.Header className='text-center fs-5 fw-medium bg-transparent'>{item.title}</Card.Header>
                        <NavLink to={`/contact/${item.title}`}>
                                <Card.Img variant="top" src={item.imageUrl} className="rounded-0" ></Card.Img>

                        </NavLink>
                        <Card.Body as={Stack} direction="horizontal" gap={3}>
                            <Card.Text className=''>$ {item.price}</Card.Text>
                            <Button variant="info" className='ms-auto' onClick={addItem.bind(null,item)}>Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            })}
            
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={3} className="text-center mb-2" >
                <Button variant="secondary" >See the cart</Button>
            </Col>
        </Row>
        
    </Container>
    </>
  )
}

export default Albums
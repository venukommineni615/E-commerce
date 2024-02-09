import React, { useContext } from 'react'
import { Offcanvas, Table, Image, Button } from 'react-bootstrap'
import CartContext from '../store/CartContext'
// const cartElements = [

//     {
    
//     title: 'Colors',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     quantity: 2,
    
//     },
    
//     {
    
//     title: 'Black and white Colors',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     quantity: 3,
    
//     },
    
//     {
    
//     title: 'Yellow and Black Colors',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     quantity: 1,
    
//     }
    
//     ]
    
    
const Cart = (props) => {
    const cartCtx=useContext(CartContext)

  return (
    <>
        <Offcanvas show={props.show} onHide={props.handleClose} placement='end' className='w-auto'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Table >
      <thead>
        <tr>
          <th className='text-decoration-underline'>Item</th>
          <th className='text-decoration-underline'>Price</th>
          <th className='text-decoration-underline'>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cartCtx.items.map((item)=>{
          console.log("quantity",item.quantity)
            return (
                <tr key={item.title}>
          <td ><Image src={item.imageUrl} thumbnail style={{ width: '5rem', height: '5rem' }}/> {item.title}</td>
          <td>{item.price}</td>
          <td ><p className='d-inline me-2 border border-2 p-1 rounded border-secondary-subtle' >{item.quantity}</p><Button variant='danger'>Remove</Button></td>
        </tr>
            )
        })}
        
        
      </tbody>
    </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart
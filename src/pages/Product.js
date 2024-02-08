import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Image } from 'react-bootstrap';
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

const Product = () => {
    const params=useParams()
    console.log(params)
    const productFilter=productsArr.filter((item)=>{
      
        return item.title===params.productId
    })
    const item=productFilter[0]
    
  return (
   <Container fluid className='bg-secondary p-4 vh-100'>
   <Carousel className='w-25 mx-auto'>
      <Carousel.Item>
      <Image src={item.imageUrl} rounded />
        <Carousel.Caption>
          <h3>{item.title} </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={item.imageUrl} rounded />
        <Carousel.Caption>
          <h3>{item.title} </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={item.imageUrl} rounded />
        <Carousel.Caption>
          <h3>{item.title} </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Product
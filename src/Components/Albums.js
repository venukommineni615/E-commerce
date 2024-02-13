import React, { useContext } from "react";
import { Card, Container, Row, Col, Button, Stack } from "react-bootstrap";
import CartContext from "../store/CartContext";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Albums = () => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  // console.log(authCtx.email)
  const addItem = async (item) => {
    const elements=cartCtx.items.filter((ele)=>{
      return ele.title===item.title
    })
    console.log(cartCtx.items,elements,item)
    if(elements.length===0){
      const res = await fetch(
        `https://crudcrud.com/api/dc973eaa1f6140889c74f57801847f90/${authCtx.email}`,
        {
          method: "POST",
          body: JSON.stringify({...item,quantity:1}),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data= await res.json()
      // console.log(data._id)
      alert("ADDED THE ITEM TO THE CART")
      cartCtx.addItem({
        ...item,
        quantity:1,
        _id:data._id
      });
    }else{
     try{ const res=await fetch(`https://crudcrud.com/api/dc973eaa1f6140889c74f57801847f90/${authCtx.email}/${elements[0]._id}`,
      {
        method:'PUT',
        body:JSON.stringify({...item,quantity:elements[0].quantity+1}),
        headers:{
          'Content-Type':'application/json'
        }
      })
      // console.log(res)
      // console.log(res.status)
      // const data=await res.json()
      // console.log(data, "updated")
      cartCtx.addItem({
        ...item,
        _id:elements[0]._id
      });
    }catch(error){
      console.error('error',error)
    }}
  };
  return (
    <>
      <Card xs={12} className="bg-secondary rounded-0">
        <Card.Body className="mx-auto my-2 bg-secondary">
          <Card.Title className=" fs-1 fw-bold text-white">
            The Generics
          </Card.Title>
        </Card.Body>
      </Card>
      <Container fluid>
        <h2 className="my-3 text-center">Music</h2>
        <Row className="justify-content-center align-items-center">
          {productsArr.map((item) => {
            return (
              <Col xs={6} key={item.title} className="mb-4 p-4">
                <Card
                  className="mx-auto bg-transparent"
                  style={{ width: "18rem" }}
                >
                  <Card.Header className="text-center fs-5 fw-medium bg-transparent">
                    {item.title}
                  </Card.Header>
                  <NavLink to={`/product/${item.title}`}>
                    <Card.Img
                      variant="top"
                      src={item.imageUrl}
                      className="rounded-0"
                    ></Card.Img>
                  </NavLink>
                  <Card.Body as={Stack} direction="horizontal" gap={3}>
                    <Card.Text className="">$ {item.price}</Card.Text>
                    <Button
                      variant="info"
                      className="ms-auto"
                      onClick={addItem.bind(null, item)}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3} className="text-center mb-2">
            <Button variant="secondary">See the cart</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Albums;

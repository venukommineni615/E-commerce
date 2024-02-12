import React from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Col, Row, Badge } from "react-bootstrap";
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

const Product = () => {
  const params = useParams();
  console.log(params);
  const productFilter = productsArr.filter((item) => {
    return item.title === params.productId;
  });
  const item = productFilter[0];

  return (
    <Container fluid className="w-100 mt-2">
      <Row>
        <Col xs={2} md={1} className="overflow-auto">
          <Image src={item.imageUrl} thumbnail />
          <Image src={item.imageUrl} thumbnail />
          <Image src={item.imageUrl} thumbnail />
          <Image src={item.imageUrl} thumbnail />
          <Image src={item.imageUrl} thumbnail />
          <Image src={item.imageUrl} thumbnail />
        </Col>
        <Col md={4}>
          <Image className="h-100" src={item.imageUrl} thumbnail />
        </Col>
        <Col className="h-100 overflow-auto">
          <Row>
            <p className="fw-bold text-secondary">{item.title}</p>
          </Row>
          <Row>
            <p className="fw-medium fs-4">Description</p>
          </Row>
          <Row>
            <p className="text-success fw-semibold fs-6">special</p>
          </Row>
          <Row className=" mt-2 mb-2">
            <Col className='fw-bold fs-3' md={2}>${item.price}</Col>
            <Col className='fw-bold my-auto p-0 ' md={1}>
              <p className="text-decoration-line-through text-secondary text-center m-0">${item.price * 2}</p>
            </Col>
            <Col className='fw-bold text-center my-auto p-0' md={2}><p className="text-success text-centerz m-0 p-0">50% Off</p></Col>
          </Row>
          <Row className="my-2">
            <Col md={1} className="p-0 ms-3 d-inline-block">
              <Badge className=" bg-success   text-center">
                <p className="fs-4 d-inline m-0 ">4</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mb-2" >
  <path d="M12 2 l 2.56 7.84 h7.44 l-6 4.56 2.56 7.84 -6.56 -5.04 -6.56 5.04 2.56 -7.84 -6 -4.56 h7.44 z" fill="white" />
</svg></Badge>
            </Col>{" "}
            <Col className="pt-2">5review and 10 ratings</Col>
          </Row>
          <Row className="my-3">
            <Col md={2}>Color</Col>
            <Col>
              <Row>
                <Col md={2}>
                  <Image src={item.imageUrl} thumbnail />
                </Col>
                <Col md={2}>
                  <Image src={item.imageUrl} thumbnail />
                </Col>
                <Col md={2}>
                  <Image src={item.imageUrl} thumbnail />
                </Col>
                <Col md={2}>
                  <Image src={item.imageUrl} thumbnail />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row><h3>Sold out</h3></Row>
          <Row><p>The item is currently out of stock</p></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;

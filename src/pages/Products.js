import React from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
    }
];


const Products = () => {
    const Products = productsArr.map((product) => (
        <Col sm={6} className='mb-3'>
            <Card style={{ width: '18rem', textAlign: 'center' }}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Body>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Text>
                        ${product.price}
                        <Button variant="primary">Add To Cart</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ))
    return (
        <>
            <Row className='bg-color-secondary'>
                {Products}
            </Row>
        </>
    )
}

export default Products
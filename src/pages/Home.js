import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

const livePerformances = [
    {
        date: '2024-06-15',
        city: 'New York',
        venue: 'Madison Square Garden'
    },
    {
        date: '2024-07-01',
        city: 'Los Angeles',
        venue: 'Hollywood Bowl'
    },
    {
        date: '2024-07-20',
        city: 'Chicago',
        venue: 'United Center'
    },
    {
        date: '2024-08-05',
        city: 'Houston',
        venue: 'Toyota Center'
    },
    {
        date: '2024-08-18',
        city: 'Miami',
        venue: 'American Airlines Arena'
    },
    {
        date: '2024-09-02',
        city: 'Atlanta',
        venue: 'State Farm Arena'
    },
    {
        date: '2024-09-15',
        city: 'Boston',
        venue: 'TD Garden'
    },
    {
        date: '2024-09-30',
        city: 'San Francisco',
        venue: 'Chase Center'
    },
    {
        date: '2024-10-12',
        city: 'Seattle',
        venue: 'Climate Pledge Arena'
    },
    {
        date: '2024-10-25',
        city: 'Dallas',
        venue: 'American Airlines Center'
    }
];

const Home = () => {
    const bookingDetails = livePerformances.map((details, index) => (
        <Row key={index} className="row justify-content-md-center">
            <Col className='m-1 p-3 border border-bottom-dark'>{details.date}</Col>
            <Col className='m-1 p-3 border border-bottom-dark'><b>{details.city}</b></Col>
            <Col className='m-1 p-3 border border-bottom-dark'>{details.venue}</Col>
            <Col className='m-1 p-3 border border-bottom-dark'><Button type="submit">Book Your Tickets</Button></Col>
        </Row>
    ))
    return (
        <Container>
            {bookingDetails}
        </Container>
    )
}

export default Home
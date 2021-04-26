import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"
import TourList from '../TourList/TourList'
const TourCard = ({el,handleDelete} ) => {
   
    return (
        <div>
        

            <Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
      {el.info}
    </Card.Text>
    {el.price}
    <Button variant="primary" onClick={() => handleDelete(el.id)}>Not intersted</Button>
    <Link to={`/tour/${el.name}`} style={{textDecoration:'none'}}>  <Button variant="outline-primary">more details</Button>{' '}</Link>
  </Card.Body>
</Card>

        </div>
    )
}

export default TourCard

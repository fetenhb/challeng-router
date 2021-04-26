import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"

const TourDetails = (props) => {
    const tourFound = props.tours.find( (tour) => tour.name == props.match.params.title);
    console.log(tourFound)
    return (
        <div> 
                 <Link to="/">
                    <Button variant="primary">Retour page home</Button>
                    </Link>
                   <Card style={{ width: '40rem' }}>
                      <Card.Img variant="top" src={tourFound.image} />
                      <Card.Body>
                         <Card.Title>{tourFound.name}</Card.Title>
                        <Card.Text>
                          {tourFound.info}
                       </Card.Text>
                        {tourFound.price}
    
                      </Card.Body>
                  </Card>
        </div>
    )
}

export default TourDetails

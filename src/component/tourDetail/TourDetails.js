import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"
import ButtonHome from '../ButtonHome/buttonHome'

const TourDetails = (props) => {
    const tourFound = props.tours.find( (tour) => tour.name == props.match.params.title);
    console.log(tourFound)
    return (
        <div> 
                 <Link to="/">
                 <ButtonHome />
                    </Link>
                    <div  style={{backgroundColor:'pink',width:'100%',height:'100%'}}>
                   <Card style={{ width: '40rem', marginLeft:'450px' }}>
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
        </div>
    )
}

export default TourDetails

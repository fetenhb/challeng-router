import React ,{useState} from 'react'
import { Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"

const AddTour = ({addNewTour}) => {
    const[name,setName]= useState('')
    const[info,setInfo]= useState('')
    const[price,setPrice]= useState(0)
    const[image,setImage]= useState('')
    const handleAdd =(e) => {
        let x= {
           id: Math.random(),
           name,
           info,
           price,
           image,
        };
        addNewTour(e,x);
        setName('');
        setInfo('');
        setPrice(0);
        setImage('');
        }
    return (
        <div style={{width:'400px', marginLeft:'400px'}}>
              <Link to="/">
                    <Button variant="primary">Retour page home</Button>
                    </Link>
            <Form>
               <Form.Group controlId="formBasicEmail"  >
                 <Form.Label >name</Form.Label>
                 <Form.Control 
                 type="text"
                 value={name}
                 onChange={(e) => setName (e.target.value)}  />
               </Form.Group>
               <Form.Group controlId="formBasicEmail" >
                 <Form.Label>info</Form.Label>
                 <Form.Control 
                 type="text" 
                 value={info}
                 onChange={(e) => setInfo (e.target.value)} />
               </Form.Group>
               <Form.Group controlId="formBasicEmail">
                 <Form.Label>image</Form.Label>
                 <Form.Control 
                 type="text"
                 value={image}
                 onChange={(e) => setImage (e.target.value)}  />
               </Form.Group>
               <Form.Group controlId="formBasicEmail">
                 <Form.Label>price</Form.Label>
                 <Form.Control 
                  type="number"
                  value={price}
                  onChange={(e) => setPrice (e.target.value)}  />
               </Form.Group>
              
                <Button variant="primary" type="submit" onClick={handleAdd}>
                   <Link to="/tours" style={{textDecoration:'none', color:'white'}}> Add new tour</Link>
                </Button>
                
</Form>
        </div>
    )
}

export default AddTour

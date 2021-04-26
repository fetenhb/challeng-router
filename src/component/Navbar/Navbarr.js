import React from 'react'
import { Button, Navbar,FormControl ,Nav, Form } from 'react-bootstrap';
import {Link} from "react-router-dom"

const Navbarr = ({nameSearch , setNameSearch}) => {
    return (
        <div>
            <>
            <Navbar bg="light" variant="light">
    <Link to="/">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    </Link>
  <Nav className="mr-auto">
   <Link to="/tours">
    <Nav.Link href="#home">Our Tours</Nav.Link>
    </Link>
    <Link to="/addTour">

    <Nav.Link href="#features">Add New Tours</Nav.Link>
    </Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" 
    
    onChange={(e) => setNameSearch (e.target.value) }
    value={nameSearch}
    className="mr-sm-2" />
    <Button variant="outline-primary"
    >Search</Button>
  </Form>
</Navbar>
</>

        </div>
    )
}

export default Navbarr

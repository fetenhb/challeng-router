import React from 'react'
import TourCard from '../TourCard/TourCard'
import { Button} from 'react-bootstrap';

import {Link} from "react-router-dom"

const TourList = (props,{handleDelete}) => {
    
   
    return (
        <>
          <Link to="/">
                    <Button variant="primary">Retour page home</Button>
                    </Link>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
            {props.tours.filter((el)=> el.name.toLowerCase().includes(props.nameSearch.toLowerCase().trim())).map((el,i)=>
            (

                < TourCard key={i} el={el} handleDelete={handleDelete}
                />
)
)}
        </div>
        </>
    )
}

export default TourList

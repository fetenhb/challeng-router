import React from 'react'
import TourCard from '../TourCard/TourCard'
import './TourList.scss'
import {Link} from "react-router-dom"
import ButtonHome from '../ButtonHome/buttonHome'
const TourList = (props) => {
    // console.log(props.toursLength(props.tours))
    // const show =()=>  props.toursLength(props.tours)===0
    //   console.log(show())
    return (
        <div>
          <Link to="/">
              <ButtonHome />
           </Link>
           {/* {show() && props.tours.map((el,i)=>( <button onClick={()=>(< TourCard key={i} el={el} handleDelete={props.handleDelete}  toursLength={props.toursLength}
                
    
                /> )}>refresh</button>) )} */}
        
           
      {/* {show() && <button onClick={()=> ( <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap' , backgroundColor:'pink'}} >
       
       {props.tours.map((el,i)=>
       (< TourCard key={i} el={el} handleDelete={props.handleDelete}  toursLength={props.toursLength}
           

       /> 
           
           
)
)}
   </div> )}> refresh</button>} */}

        <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap' , backgroundColor:'pink'}} >
       
            {props.tours.filter((el)=> el.name.toLowerCase().includes(props.nameSearch.toLowerCase().trim())).map((el,i)=>
            (< TourCard key={i} el={el} handleDelete={props.handleDelete}  toursLength={props.toursLength}
                
    
            /> 
                
                
)
)}
        </div> 
        </div>
    )
}

export default TourList

import React from 'react'
import TourCard from '../TourCard/TourCard'
import './TourList.scss'
import {Link} from "react-router-dom"
import ButtonHome from '../ButtonHome/buttonHome'
const TourList = (props) => {
    console.log(props.toursLength(props.tours))
    const show =()=>  props.toursLength(props.tours)===0
      console.log(show())
    return (
        <div>
          <Link to="/">
              <ButtonHome />
           </Link>
    
      <div style={{ backgroundColor:'pink', height:'900px'}} >

   <div> <span style={{  borderBottom: '4px solid #F190AA', letterSpacing:'3px', fontSize:'35px',marginLeft:'680px'}} >Our tours</span></div>
   {  show() && 
             <div> 
                 <button className='btn-not' style={{marginLeft:'720px', marginTop:'20px'}} onClick={props.refresh}> refresh</button> 
            </div>
             }

        <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap' , backgroundColor:'pink', marginTop:'20px'}} >
            
            {props.tours.filter((el)=> el.name.toLowerCase().includes(props.nameSearch.toLowerCase().trim()))
            .map((el,i)=>
            (< TourCard key={i} el={el} handleDelete={props.handleDelete}  toursLength={props.toursLength}  /> )
                ) 
            }
        </div>
        </div>
        </div>
    )
}

export default TourList

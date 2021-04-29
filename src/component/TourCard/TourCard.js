import React from 'react'
import {Link} from "react-router-dom"
import './TourCard.scss'
import ReactReadMoreReadLess from "react-read-more-read-less";


const TourCard = ({el,handleDelete,toursLength} ) => {
  
  
    return (
     
        <div>
<div class="example-2 card" style={{ width: '40rem' , marginTop:'50px' }}>
    <div class="wrapper" style={{  backgroundImage: `url(${ el.image})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat',height: 'auto' ,width:'100%'}}>
      <div class="header">
        <div class="date">
          <span class="day">{el.country}</span>
        </div>
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
        </ul>
      </div>
      <div class="data">
        <div class="content">
        
            <h1 class="title"><a href="#">{el.name}</a></h1>
           
          <div className='content  content--stroke-shadow' style={{display:'flex' , justifyContent:'space-around'}}> 
               <ReactReadMoreReadLess
                  charLimit={150}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                         >
                 {el.info}
               </ReactReadMoreReadLess>
               <p style={{alignSelf:'center', marginTop:'10px'}}>{el.price}</p>
          </div>
            
         </div>
           <div style={{display:'block',justifyContent:'center',marginLeft:'270px',marginBottom:'30px'}}>
            <div>
              <button className='btn-not' onClick={()=>handleDelete(el.id)}>not interested</button>
            </div>
            <div>
             <Link to={`/tour/${el.name}`} style={{textDecoration:'none', fontWeight:'bold', fontSize: '20px'}}><a>more details</a></Link> 
            </div>
          </div>
      </div>
    </div>
  </div>

        </div>
    )
}

export default TourCard

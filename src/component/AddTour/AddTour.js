import React ,{useState} from 'react'
import { Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"
import ButtonHome from '../ButtonHome/buttonHome'
import './AddTour.css'
const AddTour = ({addNewTour}) => {
    const[name,setName]= useState('')
    const[info,setInfo]= useState('')
    const[price,setPrice]= useState('')
    const[image,setImage]= useState('')
    const[country,setCountry]= useState('')

    const handleAdd =(e) => {
        let x= {
           id: Math.random(),
           name,
           info,
           price,
           image,
           country,
        };
        addNewTour(e,x);
        setName('');
        setInfo('');
        setPrice('');
        setImage('');
        setCountry('');
        }
    return (
        <div >
              <Link to="/">
                 <ButtonHome />
               </Link>
               <div style={{width:'400px', marginLeft:'500px', marginTop:'50px'}}>



               <div class='bold-line'></div>

               <div class='container'>
  <div class='window'>
    <div class='overlay'></div>
    <div class='cont'>
      <div class='welcome'>Hello There!</div>
      <div class='subtitle'>you need to fill this form </div>
      <div class='input-fields'>
        <input type='text' 
           placeholder='title' 
           class='input-line full-width'
           value={name}
           onChange={(e) => setName (e.target.value)} >
        </input>
        <input type='text' 
           placeholder='name' 
           class='input-line full-width'
           value={country}
           onChange={(e) => setCountry (e.target.value)} >
        </input>
        <input 
           type='text' 
           placeholder='description' 
           class='input-line full-width'
           value={info}
           onChange={(e) => setInfo (e.target.value)}
           >

        </input>
        <input 
           type='text' 
           placeholder='description' 
           class='input-line full-width'
           value={image}
           onChange={(e) => setImage (e.target.value)} 
           >
            
        </input>
        <input 
           type='text' 
           placeholder='price' 
           class='input-line full-width'
           value={price}
           onChange={(e) => setPrice (e.target.value)} 
           >
            
        </input>  <div><Link to="/tours" ><button class='ghost-round full-width' style={{marginTop:'30px'}} onClick={handleAdd}>   
      Add new tour</button></Link></div>
      </div>
    
    </div>
  </div>
</div>
             
       
          </div>
        </div>
    )
}

export default AddTour

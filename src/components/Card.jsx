import React from 'react'
import image1 from '../assets/punto1.jpg'
import './Cards.css';


function Card({title, imgSource, descripcion}) {
  return (
    <div className='card animate__animated animate__backInDown' >
      <img src={imgSource} alt="" className='card-img-top'/>
      <div className='card-body'></div>
        <h4 className='card-tile'> {title} </h4>
        <p className='card-text text-secondary'>
        {descripcion}
        </p>
      
    </div>
  )
}



export default Card

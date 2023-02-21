import React from 'react'
import image1 from '../assets/punto1.jpg'
import './Cards.css';


function Card() {
  return (
    <div className='card'>
      <img src={image1} alt="" />
      <div className='card-body'></div>
        <h4 className='card-tile'> nombre </h4>
        <p className='card-text text-secondary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab aliquam illum iste 
        excepturi aliquid quos voluptatem vero repellendus, quisquam placeat, natus 
        animi a magni magnam necessitatibus corrupti commodi consequatur.
        </p>
      
    </div>
  )
}



export default Card

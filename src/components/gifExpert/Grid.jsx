import React, { useState } from 'react';
import { useFetchGifs } from "../../hooks/UseFetchGifs";
import { GifItem } from "./GiftItem";
import "./grid.css";

export const GifGrid = ({ category }) => {
  const { images, isloading } = useFetchGifs(category);

  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentGifIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentGifIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        <div className='botonDerecho'> <button onClick={handlePrevious}>Previous</button></div>
        <div className='gif'><GifItem gif={images[currentGifIndex]} /></div>
        <div className='botonIzquierdo'><button onClick={handleNext}>Next</button></div>
      </div>
    </>
  );
};
import React, { useState } from 'react';
import Card from './Card';
import { ComponentApp } from '../ComponentApp';




function Cards() {
    const [showCards, setShowCards] = useState(true);
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
      setShowComponent(true);
      setShowCards(false);
    }
  
    return (
        <div className="container">
        {showCards && (
          <div className="row">
            <div className="col-md-4" onClick={handleClick}>
              <Card />
            </div>
            <div className="col-md-4" onClick={handleClick}>
              <Card />
            </div>
            <div className="col-md-4" onClick={handleClick}>
              <Card />
            </div>
          </div>
        )}
        
        {showComponent && <ComponentApp />}
      </div>
    );
  }
export default Cards
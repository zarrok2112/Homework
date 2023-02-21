import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import Cards from './components/Cards';
import './App.css';


import logo from './assets/logo.gif';


function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading animate__animated animate__zoomIn">
          <img src={logo} alt="loading" />
        </div>
      ) : (
        <Cards />
      )}
    </div>
  );
  
}

export default App

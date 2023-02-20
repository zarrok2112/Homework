import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Cards from './components/Cards';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Cards/>
    </div>
  )
}

export default App

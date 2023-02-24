import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const number = parseInt(inputValue);
      if (!isNaN(number)) {
        const result = number % 2 === 0 ? 'par' : 'impar';
        console.log(`${number} es ${result}`);
      } else {
        console.log(`"${inputValue}" no es un número válido`);
      }
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
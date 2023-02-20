import { useState } from 'react';
import reactLogo from './assets/logo.gif'
import './App.css'

const FirstApp = ({value}) => {
    const [counter, setCounter] = useState(value)
    
    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstract = () =>{
        setCounter(counter - 1)
    }

    const handlereset = () =>{
        setCounter(value)
    }

    return(
        <>
                  <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>
        <span> {counter} </span>
        
        </h1>
        <h2>
            <button onClick={() => handleAdd()}>  +1</button>
            <button onClick={() => handlereset()}> reset </button>
            <button onClick={() => handleSubstract()} >-1</button>
        </h2>
        
        </>
    )
}

export default FirstApp
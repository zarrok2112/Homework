import  React, {useState} from 'react';
import { useCounter } from "../hooks/UseCounter";
import {Small} from './Small';

export const Memorize = () => {
    const {counter, handleAdd} = useCounter(10);
    const [first, setFirst] = useState(10);

    return(
        <> 
            <h1>Memorize <Small value={counter}/></h1>
            <hr/>
            <button
                className='boton_primario'
                onClick={() => handleAdd()}
            >
                +1
            </button>

            <button
                className='boton_primario'
                onClick={() => setFirst(20)}
            >
                +1
           </button>     
        </>
    )
}


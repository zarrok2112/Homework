import React, {useState, useMemo} from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

const heavyStuff = ( iterations ) => {
    for(let i = 0; i < iterations; i++){
        console.log('Vamos en ', i);
    }

    return `${ iterations } realizadas`
}

export  const MemoHookAL = () => {
    const {counter, handleAdd} = useCounter(10);

    const memo = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Memo Hook <Small value={counter} /></h1>
            <hr />

            <h4> { memo } </h4>
            <h4> { memo } </h4>

            <button
                className='boton_primario'
                onClick={() => handleAdd}
            >
                +1
            </button>
        </>
    )
}